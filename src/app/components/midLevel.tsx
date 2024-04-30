import React from 'react';
import Image from 'next/image';
import LaunchbackLines from '@/app/assets/images/launch-backLines.svg';
import copy from '@/app/assets/images/copy.svg'
import "@/app/style/lowLevel.css";

function Page() {
    return (
        <div className='relative text-center px-3 pt-8 overflow-hidden'>
            <div className=''>
                <div className='flex flex-col gap-8 max-w-[750px] mx-auto'>
                    <div className='relative overflow-hidden'>
                        <div className='flex flex-col sm:flex-row gap-5  bg-gray border border-card rounded-[15px] text-left p-6 pr-8 '>
                            <div className='font-semibold flex h-[60px] min-w-[60px] max-w-[60px] justify-center rounded-[10px] items-center lunch-number-box'>
                                01
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-17 font-medium'>P2P Supported mid </h3>
                                <p className='text-dullWhite text-16 pt-1'>Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem. </p>
                                <table className='text-14'>
                                    <th className='w-1/5 font-medium text-dullWhite !max-h-[3px]'>Dependency</th>
                                    <th className='w-3/10 font-medium text-dullWhite'>Version</th>
                                    <th className='w-1/2 font-medium text-dullWhite'>Installation</th>
                                    <tr>
                                        <td>Rust</td>
                                        <td>rustc 1.69.0-nighly</td>
                                        <td className='text-yellow code'>curl --proto ‘=https’ --tlsv1.2 -ssf https://sh.rustup.rs | shrustup toolchain install nightly</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className='z-0 absolute left-0 top-0 w-full flex items-center justify-center overflow-hidden'>
                            <Image src={LaunchbackLines} className='ml-[150px]' alt="back-lines" />
                        </div>
                    </div>


                    <div className='relative overflow-hidden'>
                        <div className='flex flex-col sm:flex-row gap-5  bg-gray border border-card rounded-[15px] text-left p-6 pr-8 '>
                            <div className='font-semibold flex h-[60px] min-w-[60px] max-w-[60px] justify-center rounded-[10px] items-center lunch-number-box'>
                                02
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-17 font-medium'>P2P Supported</h3>
                                <p className='text-dullWhite text-16 pt-1'>Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem. </p>
                                <div className='flex flex-col gap-8 lowLevelCardCode p-4 rounded-[15px]'>
                                    <div className='flex justify-between  text-[40px] leading-[5px]'>
                                        <h5 className='-mt-1'>...</h5> <Image className='h-[15px] w-[15px]' src={copy} alt='' />
                                    </div>
                                    <div>
                                        <span className='text-blue'>cd</span> <span className='text-yellow'>deoxys</span><br></br>
                                        <span className='text-blue'>cargo</span> <span className='text-yellow'>build --release</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='z-0 absolute left-0 top-0 w-full flex items-center justify-center overflow-hidden'>
                            <Image src={LaunchbackLines} className='ml-[150px]' alt="back-lines" />
                        </div>
                    </div>

                    <div className='relative overflow-hidden'>
                        <div className='flex flex-col sm:flex-row gap-5  bg-gray border border-card rounded-[15px] text-left p-6 pr-8 '>
                            <div className='font-semibold flex h-[60px] min-w-[60px] max-w-[60px] justify-center rounded-[10px] items-center lunch-number-box'>
                                03
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-17 font-medium'>P2P Supported</h3>
                                <p className='text-dullWhite text-16 pt-1'>Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem. </p>
                                <div className='flex flex-col gap-8 lowLevelCardCode p-4 rounded-[15px]'>
                                    <div className='flex justify-between  text-[40px] leading-[5px]'>
                                        <h5 className='-mt-1'>...</h5> <Image className='h-[15px] w-[15px]' src={copy} alt='' />
                                    </div>
                                    <div>
                                        <span className='text-blue'>cd</span> <span className='text-yellow'>deoxys</span><br></br>
                                        <span className='text-blue'>cargo</span> <span className='text-yellow'>build --release</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='z-0 absolute left-0 top-0 w-full flex items-center justify-center overflow-hidden'>
                            <Image src={LaunchbackLines} className='ml-[150px]' alt="back-lines" />
                        </div>
                    </div>


                    <div className='relative overflow-hidden'>
                        <div className='flex flex-col sm:flex-row gap-5  bg-gray border border-card rounded-[15px] text-left p-6 pr-8 '>
                            <div className='font-semibold flex h-[60px] min-w-[60px] max-w-[60px] justify-center rounded-[10px] items-center lunch-number-box'>
                                04
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-17 font-medium'>P2P Supported</h3>
                                <h4 className='text-16 font-medium'>Single-Node Development Chain</h4>
                                <p className='text-dullWhite text-16 pt-1'>Lorem ipsum dolor sit amet consectetur. Et suscipit cras arcu vestibulum dui vivamus hendrerit sem. </p>
                                <div className='flex flex-col gap-8 lowLevelCardCode p-4 rounded-[15px]'>
                                    <div className='flex justify-between  text-[40px] leading-[5px]'>
                                        <h5 className='-mt-1'>...</h5> <Image className='h-[15px] w-[15px]' src={copy} alt='' />
                                    </div>
                                    <div>
                                        <span className='text-blue'>cargo</span> <span className='text-yellow'> run --release -- --dev --sealing-manual</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='z-0 absolute left-0 top-0 w-full flex items-center justify-center overflow-hidden'>
                            <Image src={LaunchbackLines} className='ml-[150px]' alt="back-lines" />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Page;
