'use client';

import React from 'react';

const WelcomeSection = () => {
    return (
        <div className="bg-white p-3 lg:p-6 rounded-md border border-gray-200 dark:text-dark-text dark:bg-dark-secondary dark:border-dark">
            <p className="hidden lg:block text-[#1677FF] font-semibold lg:text-[16px]">
                Chào mừng bạn đến với Cần Thơ Hub trang thông tin tổng hợp cuộc sống ở Cần Thơ
            </p>
            <hr className="hidden lg:block border-dotted border-t-1 border-gray-300 mt-1 mb-2" />
            <p className="text-[#898989] mb-1 lg:mb-4 italic">
                Có thể bạn quan tâm đến
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-4 lg:text-[16px] text-[#3559E0] font-medium">
                {['Hóng hớt', 'Điểm check in', 'Điểm hẹn hò', 'Cà phê', 'Nơi ăn uống', 'Tìm việc làm', 'Tìm nhà trọ'].map((item, index) => (
                    <a key={index} href="#" className="text-blue-600 hover:underline">
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default WelcomeSection;
