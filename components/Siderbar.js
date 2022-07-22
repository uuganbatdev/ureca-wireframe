import { UsersIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router'

export default function Siderbar() {
    const router = useRouter();
    const routerSplit = router.asPath.split('/');
    const pageName = routerSplit[routerSplit.length - 1];
    const userType = routerSplit[routerSplit.length - 2];

    return (
    <aside className="w-full h-screen overflow-auto py-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
        <nav className="text-sm px-3">
          <div className="">
            <h2 className="text-lg font-semibold  tracking-widest uppercase dark:text-gray-400">
                {userType}
            </h2>
        </div>
            {
                sideItems[userType]?.map((item, index) => (
                    <h2 key={index} onClick={() => router.push(`${item.route}`)}
                     className={` ${pageName === item.route ? 'bg-white' : '' } cursor-pointer text-xs py-3 px-2 rounded font-semibold tracking-widest uppercase dark:text-gray-400`}>
                        {item.name}
                    </h2>
                ))
            }
        </nav>
      </aside>
    )
}


const sideItems = {
  su: [
    {
      name: "Хувийн мэдээлэл харах",
      route: "profile",
    },
    {
        name: 'Хэрэглэгчид',
        route: 'users'
    },
    {
      name: "Үйлчилгээ үзүүлж буй төслүүдийн жагсаалт харах",
      route: "projectLists",
    },
  ],
  ve: [
    {
      name: "Хувийн мэдээлэл харах",
      route: "profile",
    },
    {
      name: "Үйлчилгээ үзүүлж буй төслүүдийн жагсаалт харах",
      route: "projectLists",
    },
  ],
  ic: [
    {
      name: "Хувийн мэдээлэл харах",
      route: "profile",
    },
    {
      name: "Үйлчилгээ үзүүлж буй төслүүдийн жагсаалт харах",
      route: "projectLists",
    },
  ],
  cl: [
    {
      name: "Хувийн мэдээлэл харах",
      route: "profile",
    },
    {
      name: "Үйлчилгээ үзүүлж буй төслүүдийн жагсаалт харах",
      route: "projectLists",
    },
  ],
  tp: [
    {
      name: "Хувийн мэдээлэл харах",
      route: "profile",
    },
    {
      name: "Үйлчилгээ үзүүлж буй төслүүдийн жагсаалт харах",
      route: "projectLists",
    },
    {
      name: "Шинээр байгуулагдсан төслийн гэрээ бүртгэх",
      route: "registerNewContract",
    },
    {
      name: "Буцаагдсан тайлан",
      route: "rejectedContracts",
    },
    {
      name: "VE-ээр төслийн гэрээний тайлан баталгаажсан тохиолдолд Tenger даатгалд баталгааны хүсэлт гаргах",
      route: "requestToTengerInsurance",
    },
    // {
    //     name: 'Илгээсэн тайлангийн төлвийн өөрчлөлтийн мэдэгдэл имэйл-ээр хүлээн авах',
    //     route: 'requestToTengerInsurance'
    // },
    {
      name: "Суулгалтын тайлан оруулах",
      route: "registerInstallationReport",
    },
    {
      name: "Хэмнэлтийн жилийн тайлан оруулах",
      route: "registerSavingsReport",
    },
    {
      name: "Илгээсэн тайлангийн түүх харах",
      route: "sentReportsHistory",
    },
  ],
};
