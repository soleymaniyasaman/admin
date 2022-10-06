import React, { useContext } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import './styles.scss';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from '../../../context/provider';
import { Link, Router} from 'react-router-dom'

function PriceComponent_table() {
  const data = useContext(UserContext);
  const { SearchBar } = Search;
  const numDiscriminant = (input) => {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "/");
  }

  const rowEvents = (row) => {      
      data.setEditData(row)
    }
  
  const numberFormatter = (cell,row,enumObject ,index) => {
    return (
      <h6 style={{opacity: "0.8"}}>{cell.rowNum}</h6>
        )
  }

  const imageFormatter = (cell) => {
    return (
      <img className="adminPanel_products_productsLists_table_pic" src={cell} />
    )
  }
  const iconFormatter = (cell,row,enumObject ,index) => {
    return (
      <h6 style={{opacity: "0.8"}}>{cell.logo}</h6>
        )
  }
  const colorFormatter = (cell) => {
    return (
      <div className="PriceComponent_tableColorContainer">
        {

          cell.map((item, index) => (
            <div key={index} className="PriceComponent_tableColor" style={{ left: (cell.length > 3) ? `${1 * index + 4}rem` : `${1.4 * index + 4}rem`, backgroundColor: item }}></div>
          ))
        }
      </div>
    )
  }
  const nameFormatter = (cell) => {
    return (
        <p className="PriceComponent_tableNamePersian" style={{opacity: "0.8"}}>{cell.persianName}</p>
    )
  }
  const priceFormatter = (cell) => {
    return (
    
        <p className="PriceComponent_tablePrice">{numDiscriminant(cell.price.price)}</p>
      
    )
  }

  const ramFormatter = (cell) => {
    return (
      <p className="PriceComponent_tableRam" style={{opacity: "0.8"}}>{cell}</p>
    )
  }
  const garanteeFormatter = (cell) => {
    return (
      <p className="PriceComponent_tableGarantee" style={{opacity: "0.8"}}>{cell}</p>
    )
  }
  const editFormatter = (index,row) => {
    return(
      <div className="container pr-0 pl-0"> 
      <div className="" key={index}>
          <Link className="adminPanel_products_products_productsList_table_icon" to="/edit" onClick={rowEvents}><FontAwesomeIcon className="icon" icon={faEdit} /></Link>
          <a className="adminPanel_products_products_productsList_table_icon"><FontAwesomeIcon className="icon" icon={faTrashAlt}/></a>
          <a className="adminPanel_products_products_productsList_table_icon"><FontAwesomeIcon className="icon checkIcon" icon={faCheck}/></a>
          <a className="adminPanel_products_products_productsList_table_icon"><FontAwesomeIcon className="icon" icon={faEye}/></a>

      </div>
      </div>
    )
  }
  
  const products = [
    {number: data.tableData[0],pic: data.tableData[0].picture, icon: data.tableData[0], name: data.tableData[0].name, ram: data.tableData[0].ram, color: data.tableData[0].backColor, price: data.tableData[0], garantee: data.tableData[0].garantee, chart: data.tableData[0].chartData, edit:data.tableData },
    {number: data.tableData[1],pic: data.tableData[1].picture, icon: data.tableData[1], name: data.tableData[1].name, ram: data.tableData[1].ram, color: data.tableData[1].backColor, price: data.tableData[1], garantee: data.tableData[1].garantee, chart: data.tableData[1].chartData, edit:data.tableData },
    {number: data.tableData[2],pic: data.tableData[2].picture, icon: data.tableData[2], name: data.tableData[2].name, ram: data.tableData[2].ram, color: data.tableData[2].backColor, price: data.tableData[2], garantee: data.tableData[2].garantee, chart: data.tableData[2].chartData, edit:data.tableData }]
  const columns = [{
    dataField:'number',
    text: 'ردیف',
    headerStyle: () => {
      return { width: "4%" };
    },
    formatter:numberFormatter
  },{
    dataField: 'pic',
    formatter:imageFormatter,
    headerStyle: () => {
      return { width: "5%" };
    },
    align:'center'
  },{
    dataField: 'icon',
    text: 'نام برند',
    headerStyle: () => {
      return { width: "9%" };
    },
    formatter: iconFormatter,
  }, {
    dataField: 'name',
    text: 'نام محصول',
    // sort: true,
    align: 'center',
    headerStyle: () => {
      return { width: "12%" };
    },
    formatter: nameFormatter,

  }, {
    dataField: 'ram',
    text: 'رم/حافظه',
    // sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
    formatter: ramFormatter,

  }, {
    dataField: 'color',
    text: 'رنگ',
    formatter: colorFormatter,
    headerStyle: () => {
      return { width: "16%" };
    },
    style: {
      position: "relative",
      paddingRight: "42px"

    }
  }, {
    dataField: 'price',
    text: 'قیمت/تومان',
    sort: true,
    sortFunc: (a, b, order) => {
      if (order === 'desc') return a.price.price > b.price.price ? -1 : 1;
      else { return a.price.price > b.price.price ? 1 : -1 };
    },
    headerFormatter: (column, index, { sortElement, filterElement }) => {
      // const { caret = 'x' } = sortElement.props;
      return (
        <div className="PriceComponent_tableHeaderCaret">
          {column.text} {sortElement}
        </div>
      );
    },

    formatter: priceFormatter,
    headerStyle: () => {
      return { width: "11%" };
    },

  }, {
    dataField: 'garantee',
    text: 'گارانتی',
    formatter: garanteeFormatter,
    headerStyle: () => {
      return { width: "12%" };
    },
  }, {
    dataField: 'edit',
    formatter: editFormatter,
    headerStyle: () => {
      return { width: "21%" };
    },
  }];

  const defaultSorted = [{
    dataField: 'price',
    order: 'desc'
  }];


  return (

    <ToolkitProvider
      keyField="price"
      data={products}
      columns={columns}
      search
      defaultSorted={defaultSorted}

    >
      {
        props => {

          const TableBottomHeader = () => {
            return (
              <div className="priceComponent_tableSearchContainer row">
                <div className="adminPanel_products_productsLists_table_search col-lg-3 col-md-4 col-5">
                  <SearchBar
                    {...props.searchProps}
                    placeholder="جستجو..."
                    className="adminPanel_products_productsLists_table_searchBox"
                    delay={10}

                  />
                  <img className="priceComponent_tableSearchBoxImg" src="/images/search.png" />
                </div>
              </div>
            )
          }
          const TableBottom = () => {
            return (
              <div className="PriceComponent_tableContainerSingleBrand">
                <div className="PriceComponent_tableBodyContainer">
                  <BootstrapTable
                    {...props.baseProps}
                    bordered={false}
                    hover
                    id="table"
                    bodyClasses="priceComponent_tableBody"
                    headerClasses="adminPanel_products_productsLists_table_header"
                    rowClasses="PriceComponent_tableRow"
                  />
                </div>
                <div className="PriceComponent_tableLeftBrand">
                  {/* <img src={"/images/mi/mi-logo-listSide.png"} className="PriceComponent_tableSideImage"></img> */}
                </div>
              </div>
            )
          }
          return (
            <div className="adminPanel_products_productsLists_table_container">
              {TableBottomHeader()}
              {TableBottom()}
              
            </div>
          )
        }
      }
    </ToolkitProvider>

  )
}


export default PriceComponent_table
