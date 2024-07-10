export default function Page() {
    return <div className="">
            <p> breadcrums/nhatro</p>
            <div className="content-center mx-auto grid grid-cols-12 gap-5">
                <div className="site-left p-4 bg-secondary col-span-7 border border-gray-200 rounded">
                    <div className="flex justify-between">
                        <h2 className="font-bold">
                            Tổng 206 kết quả
                        </h2>
                        <p>
                            Cập nhật: 13:17 04/03/2024
                        </p>
                    </div>
                    <div className="flex justify-start items-center my-4">
                        <span>Sắp xếp: </span>
                        <div className="">
                            <form className="max-w-sm mx-auto">
                                <select id="countries" className="rounded py-1 px-2">
                                    <option selected>Mặc định</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="site-right p-4 col-span-5 rounded">
                    <div className="grid grid-rows-4 gap-4">
                        <div className="box-content h-20 w-20 p-4 bg-[#fff] w-3/4 rounded">Component fitler 1</div>
                        <div className="box-content h-20 w-20 p-4 bg-[#fff] w-3/4 rounded">Component fitler 2</div>
                        <div className="box-content h-20 w-20 p-4 bg-[#fff] w-3/4 rounded">Component fitler 3</div>
                        <div className="box-content h-20 w-20 p-4 bg-[#fff] w-3/4 rounded">Component tin mới đăng</div>
                    </div>
                </div>
        </div>
    </div>
}