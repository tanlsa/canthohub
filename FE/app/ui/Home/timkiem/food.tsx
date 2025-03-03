import { MdFoodBank } from "react-icons/md";
import MyPagination from "@/app/ui/Master/Pagination";
import { FilterLocation, FilterPrice } from "@/app/ui/Home/nhatro/filters";
import FoodCard from "@/app/ui/Home/anuong/FoodCard";

export default function FoodPage({isAdd} : {
    isAdd? : boolean
}) {
    const mockfoods = [...Array(12)].map((_, index) => ({
        image: "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400",
        title: "Cơm gà Lê Trang",
        description: "Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc",
        price: "20K - 275K",
        address: "Ninh Kiều, Cái Răng, Cần Thơ",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
    }));
    return (
        <>
            <div className="grid grid-cols-12 gap-4">
                <div className="site-left col-span-12">
                    <div className="bg-secondary border p-4 border-border-color dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg">
                        <div className="h-[60px] rounded w-100 mb-2 flex items-center justify-between">
                            <div className="flex items-center mr-3">
                                <MdFoodBank className=" text-medium-blue text-[50px]"></MdFoodBank>
                                {!isAdd ? <h2 className="font-bold text-lg ml-2">Điểm ăn uống</h2> : ''}
                            </div>
                            {/* <SearchWithSort isAdd={isAdd}/> */}
                                
                        </div>
                        <div className="mx-auto grid grid-cols-3 gap-[10px]">
                            {mockfoods.map((food, index) => (
                                <FoodCard isAdd={isAdd} key={index} food={food} />
                            ))}
                        </div>  
                        <MyPagination total={100} className="flex justify-end mt-5 mr-2"/>
                    </div>
                </div>
                {/* <div className="site-right col-span-4 rounded">
                    <FilterLocation/>
                    <div className="mt-4">
                    <FilterPrice/>
                    </div>
                </div> */}
            </div>
        </>
    );
}
