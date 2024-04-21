import { link } from 'fs'
import React from 'react'
import { DiJava } from 'react-icons/di'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { SiApachekafka, SiFirebase, SiGooglecloud, SiKotlin, SiPython, SiReactivex, SiRubyonrails, SiSelenium, SiSpringboot } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
    const projects = [
        {
            title: "Modern Marketplace On-the-go MSME Indonesia (Mooka)",
            desc: `Successfully developed "MOOKA", applications to help accelerate the development of SME in Indonesia using BRI API and Google Cloud Service. In this project, I played role as Mobile Developer and Backend Developer. In the end, this apps used by Government of Bojonegoro to accelerate the growth of local MSME in Bojonegoro.`,
            tech: [SiRubyonrails, SiKotlin, SiSelenium, SiGooglecloud, SiApachekafka],
            link: "https://github.com/Miftahunajat/mooka-api",
            cover: "/project-1.png",
            background: "bg-indigo-500"
        },
        {
            title: "Flib",
            tech: [SiPython, GiArtificialIntelligence, SiRubyonrails],
            desc: "An Android Application to help companies calculating flexible benefit from its own employees using artificial intelegence.",
            link: "https://github.com/Miftahunajat/flib-web",
            cover: "/project-4.png",
            background: "bg-blue-500"
        },
        {
            title: "NamiApp",
            tech: [DiJava, SiSpringboot, SiReactivex],
            desc: "create an Android Application for automate inspection of Telkomsel supervisor's subordinate. Built using Java.",
            link: "",
            cover: "",
            background: "bg-green-500"
        },
        {
            title: "KampungKu",
            tech: [SiKotlin, SiFirebase],
            desc: "Collaborate with PENS activist to create An Android application to manage the RT activities. Built using Kotlin and MVVM Design pattern.",
            link: "",
            cover: "/project-3.png",
            background: "bg-cyan-500"
        },
    ]
    return (
        <div className=' py-10 p-5 smp:p-0'>
            <Title
                text='Projects'
                className='flex flex-col items-center justify-center rorate-6'
            />
            <div className=' grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
                {projects.map((project, index) => {
                    return <Link href={project.link} key={index}>
                        <div className={cn("p-5 rounded-md",
                            project.background
                        )} >
                            <DirectionAwareHover imageUrl={project.cover} className='w-full h-80 space-y-5 cursor-pointer' >
                                <div className=' space-y-5'>
                                    <h1 className="text-2xl font-bold">{project.title}</h1>
                                    <p>{project.desc}</p>
                                    <div className='flex items-center gap-5'>
                                        {
                                            project.tech.map((Icon, index) => {
                                                return <Icon key={index} className='w-8 h-8' />
                                            })
                                        }
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}
