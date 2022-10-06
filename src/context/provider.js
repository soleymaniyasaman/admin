import React, { createContext ,useState } from 'react';

export const UserContext = createContext();

const MyProvider = ({children}) => {
    const [tableData,setTableData] = useState([
        { 
            id: "iphon12progreen",
            rowNum:"۱",
            name:{ persianName :"آيفون۱۲پرو", englishName : "iPhone 12 Pro"},
            price:{ "price" :10000000, "changePrice" :2000},
            picture: "/images/iphone-image.png",
            tag: "green",
            logo: "اپل", 
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF","#353535","#B0B0B0","#FFFFFF"],
            chartData:[12, 19, 10, 12, 9, 17,12, 9, 17,15,13,16]
        },
        { 
            id: "iphon12prored",
            rowNum:"۲",
            name:{persianName:"آيفون۱۲پرو",englishName: "iPhone 12 Pro"},
            price:{ "price" :13000000, "changePrice" :-2000},
            picture: "/images/iphone-image.png",
            tag: "red",
            logo: "اپل",
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF","#353535"],
            chartData:[16, 19, 10, 12, 10, 17,12, 9, 17,15,15,16]

        },
        { 
            id: "iphon12progray",
            rowNum:"۳",
            name:{persianName:"آيفون۱۲پرو",englishName: "iPhone 12 Pro"},
            price:{ "price" :11000000, "changePrice" :0},
            picture: "/images/iphone-image.png",
            tag: "gray",
            logo: "اپل",
            ram:"۱۲۸/۶ گیگ" ,
            garantee: "۱۸ ماهه پارسه",
            comment: "رام‌چینی",
            backColor:["#B0B0B0","#FFFFFF"],
            chartData:[16, 19, 10, 12, 10, 17,12, 9, 17,15,15,16]

        },
    ]);
    const [brands,setBrands] = useState([
        {
            id: "0",
            name: "همه برندها",
            routing:'/قیمت-گوشی-موبایل',
            clickChange:"all"
        },
        {
            id: "1",
            url: "/images/apple.png",
            routing:'/قیمت-گوشی-اپل',
            clickChange:"apple"
        },
        {
            id: "2",
            url: "/images/Samsung.png",
            routing:'/قیمت-گوشی-سامسونگ',
            clickChange: "samsung",
        },
        {
            id: "3",
            url: "/images/Huawei.png",
            routing:'/قیمت-گوشی-هوآوی',
            clickChange: "huawei",
        },
        {
            id: "4",
            url: "/images/xiaomi.png",
            routing:'/قیمت-گوشی-شیاومی',
            clickChange: "mi",
        },
        {
            id: "5",
            url: "/images/nokia.png",
            routing:'/قیمت-گوشی-نوکیا',
            clickChange: "nokia",
        },
        {
            id: "6",
            url: "/images/honor.png",
            routing:'/قیمت-گوشی-آنر',
            clickChange: "honor",
        }
    ])
    const [id,setId]=useState("Product")
    const [name,setName]=useState("productList")
    const [editData,setEditData] = useState("")
    const [selected,setSelected]=useState("firstInformation")
    return (
        <UserContext.Provider value={{tableData,setTableData,brands,setBrands,id,setId,name,setName,editData,setEditData,selected,setSelected}}>
            {children}
        </UserContext.Provider>
    );
}

export default MyProvider;
