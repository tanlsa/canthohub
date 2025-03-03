import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link'
import { EllipsisOutlined } from '@ant-design/icons'
import { Post } from "@type/master"
import {formatNumber} from "@util"

// const post = {
//     id: 1,
//     author: 'Lan Lan',
//     title: 'Tuyển dụng Flutter tại Việt Nam',
//     time: '15:30 04/03/2024',
//     description: "Từ: 1,5 - 2 năm kinh nghiệm với Flutter; Từng làm dự án lĩnh vực Education; Có kiến thức tốt về OOP, Data Structures, Algorithm;",
//     likes: '830k',
//     comments: '390k'
// }

export default function CardNews({ post, isSetting = false }: {
    post: Post
    isSetting?: boolean
}) {
    return (
        <div>
            <div className='' >
                <div key={post.id} className="p-4 flex flex-col-reverse lg:flex-row gap-2 justify-center items-center border my-4 rounded-lg h-full dark:text-dark-text dark:bg-dark-secondary dark:border-dark">
                    <div className="flex-1 lg:w-3/4 h-fit">
                        {isSetting &&
                            <Link href={`/baidang/tintuc/${post.id}`}
                                className='flex cursor-alias items-start justify-center w-fit my-3'
                            >
                                <EllipsisOutlined />
                            </Link>
                        }
                        <div className="flex items-center h-fit">
                            <div className="w-[50px] h-full flex items-center justify-center">
                                <Image src={post.user.avatar_image.url ?? ""} width={50} height={50} alt="Avatar" className="rounded-full object-cover w-full" />
                            </div>
                            <div className=" px-2 gap-1">
                                <div>
                                    <div className="font-bold border-r inline-block mr-2 pr-2 text-sm">{post.user.full_name}</div>
                                    <div className="font-bold inline-block  text-sm">{post.title}</div>
                                </div>
                                <div className="italic text-xs">{post.created_at.toLocaleString("vi")}</div>
                            </div>
                        </div>
                        <div className="text-sm mt-3 ">
                            <div className="line-clamp-3">
                                {post.content}
                            </div>
                            <p>
                                <Link href={`/tintuc/${post.id}`} className="text-blue-500">Xem thêm </Link>
                            </p>

                        </div>
                        <div className="mt-2 text-gray-500 text-xs flex space-x-4">
                            <div className="flex items-center space-x-1">
                                <span>{post.likes_count && formatNumber(post.likes_count)}</span>
                                <AiOutlineLike className='w-[24px] h-[24px]' />
                            </div>
                            <div className="flex items-center space-x-1">
                                <span>{post.comments_count && formatNumber(post.comments_count)}</span>
                                <AiOutlineComment className='w-[24px] h-[24px]' />
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 lg:w-1/4 lg:max-w-[200px]">
                        <Image src={post.post_image?.[0].url ?? ""} alt="Food" width={200} height={200} className="w-full object-cover rounded-md" />
                    </div>

                </div>
            </div>
        </div>
    );
}