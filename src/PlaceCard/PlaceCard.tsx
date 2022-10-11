import { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

type cardProps = {
    title: string,
    location: string,
    googleMapsUrl: string,
    startDate: string,
    endDate: string,
    description: string,
    imageUrl: string
}

export default function PlaceCard(props: cardProps) {
    return (
        <main className='flex flex-col justify-center items-center '>
            <section className='flex flex-row  bg-red bg-[#B0C1D9] w-[500px]'>
                <img className='items-stretch object-cover object-bottom h-auto w-[200px] overflow-hidden' src={props.imageUrl} alt="" />
                <div className="flex justify-center flex-col items-left  w-[400px]  h-auto text-left pl-3">
                    <h3>
                        <i className="bi bi-pin-map text-orange-600 px-1 pr-2"></i>
                        <span className='uppercase pr-3'>{props.location}</span>
                        <a className=' underline underline-offset-2 capitalize' href={props.googleMapsUrl}>view on google maps</a>
                    </h3>
                    <h1 className='text-[2.5rem] font-semibold'>{props.title}</h1>
                    <p className='pt-5 font-bold'> {props.startDate} - {props.endDate}</p>
                    <p className='pt-2'>{props.description}</p>
                </div>
            </section>
        </main>
    )
}