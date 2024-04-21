
"use client";

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { text } from 'stream/consumers'
import { FaGolang } from 'react-icons/fa6'
import { SiKotlin, SiRobotframework, SiRubyonrails, SiRust, SiSpringboot } from 'react-icons/si';
import { FaAws, FaJava, FaPython } from 'react-icons/fa';
import { DiGoogleCloudPlatform } from 'react-icons/di';

export default function Skills() {
  const skills = [
    {
      title: "Golang",
      Icon: FaGolang
    },
    {
      title: "Java",
      Icon: FaJava
    },
    {
      title: "Kotlin",
      Icon: SiKotlin
    },
    {
      title: "Python",
      Icon: FaPython
    },
    {
      title: "Ruby on Rails",
      Icon: SiRubyonrails
    },
    {
      title: "Rust",
      Icon: SiRust
    },
    {
      title: "Artificial Intelegence",
      Icon: SiRobotframework
    },
    {
      title: "Google Cloud Platform",
      Icon: DiGoogleCloudPlatform
    },
    {
      title: "Amazon Web Server",
      Icon: FaAws
    },
  ]
  return (
    <div className=' max-w-5xl mx-auto px-8'>
      <Title text='Skills' className=' flex flex-col items-center justify-center  -rotate-6' />
      <HoverEffect items={skills} />
    </div>
  )
}
