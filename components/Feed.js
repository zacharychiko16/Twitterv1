import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input"
import Post from "./Post"


export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Zachary Baird",
            username: "themilkman",
            userImg: "https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg",
            img: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZjJTIwYmFyY2Vsb25hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            text:"nice",
            timestamp: "1 min ago"

        },
        {
            id: "2",
            name: "Zachary Baird",
            username: "themilkman",
            userImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            img: "https://images.unsplash.com/photo-1565483276107-8a1fbf01ab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcCUyMG5vdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            text:"nice",
            timestamp: "1 min ago"

        },
    ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
    <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
      <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
      <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
        <SparklesIcon className="h-5" />
      </div>
    </div>
    <Input/>
    {posts.map((post)=>(
        <Post key={post.id} post={post}/>
    ))}
    </div>
  )
}
