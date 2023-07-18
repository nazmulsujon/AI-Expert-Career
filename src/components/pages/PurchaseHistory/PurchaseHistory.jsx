import { useEffect } from "react";

const PurchaseHistory = () => {
    // scrollTo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className=" w-full">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#202123] text-[red] ">
                        <tr className="text-center">
                            <th className="text-center">SI. No</th>
                            <th className="text-center">Course</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Payment Date</th>
                            <th className="text-center">Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className="text-center">1</th>
                            <td className="text-center">Adobe Photoshop Advance Training</td>
                            <td className="text-center">$6000</td>
                            <td className="text-center">02-06-2023</td>
                            <td className="text-center"><button className="bg-[red] text-white px-6 py-2 rounded-lg">Download</button></td>
                        </tr>
                        <tr>
                            <th className="text-center">2</th>
                            <td className="text-center">Adobe Photoshop Advance Training</td>
                            <td className="text-center">$6000</td>
                            <td className="text-center">02-06-2023</td>
                            <td className="text-center"><button className="bg-[red] text-white px-6 py-2 rounded-lg">Download</button></td>
                        </tr>
                        <tr>
                            <th className="text-center">3</th>
                            <td className="text-center">Adobe Photoshop Advance Training</td>
                            <td className="text-center">$6000</td>
                            <td className="text-center">02-06-2023</td>
                            <td className="text-center"><button className="bg-[red] text-white px-6 py-2 rounded-lg">Download</button></td>
                        </tr>
                        <tr>
                            <th className="text-center">4</th>
                            <td className="text-center">Adobe Photoshop Advance Training</td>
                            <td className="text-center">$6000</td>
                            <td className="text-center">02-06-2023</td>
                            <td className="text-center"><button className="bg-[red] text-white px-6 py-2 rounded-lg">Download</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PurchaseHistory;