"use client"

import CircleImage from '@/components/CircleImage'
import SliderServices from '@/components/SliderServices'
import TransitionPage from '@/components/TransitionPage'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function ServicesPage() {

  const t = useTranslations("ServicesPage");

  return (
    <>
      <TransitionPage />
      <CircleImage />

      <div className='grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20'>
        <div className='max-w-[450px] mt-20 md:mt-0'>
          <h1 className='text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5'>
            {t('title1')} {' '}
            <span className='font-bold text-orange-400'>{t('title2')}.</span>
          </h1>
          <p className='mx-3 md:mx-0 mb-3 text-xl text-gray-300'>{t('description')}</p>
          <div className='flex justify-center md:justify-start'>
            <Link
              href="mailto:jbautista.dormo.corea@gmail.com?subject=Consulta%20Profesional&body=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
              className='px-3 py-2 rounded-lg cursor-pointer bg-orange-400 hover:bg-orange-400/65'
              target='_blank'
            >{t('titleLinkContact')}</Link>
          </div>
        </div>
        <div className='mb-16'>
          <SliderServices />
        </div>
      </div>

    </>
  )
}
