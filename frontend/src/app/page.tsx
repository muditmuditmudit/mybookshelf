"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import styles from './page.module.css'
const page = () => {
  const router = useRouter();

  return (
    <div className={styles.c1}>
      <div className={styles.c11}>
        <Image src= "https://m.media-amazon.com/images/G/01/kfw/landing/img_logo2x._CB611756372_.png"
        alt = "Amazon logo"
        className={styles.logo}
        width = {1000}
        height = {500}
        />
        <p className={styles.t1}>Once you learn to read, you will be forever free</p>

        <div className={styles.btnRow}>
          <button className={styles.btn1}
          onClick={()=>{
            router.push('/signup')
          }}
          >Creat an account  </button>

          <button className={styles.btn2}
          onClick={()=>{
            router.push('./login')
          }}
          >
            <Image src= "https://m.media-amazon.com/images/G/01/kfw/landing/icon-amazon-a2x._CB611757832_.png"
            alt = "Amazon logo"
            className={styles.logo}
            width = {20}
            height = {20}
            />
            <span>Signin to account</span>
        </button>
        </div>
      </div>
      <Image src="https://m.media-amazon.com/images/G/01/kfw/landing/img_kindleWeb_IN._CB610886625_.png"
      alt = "Bookshelf Logo"
      className ={styles.bottomimg}
      width = {1000}
      height = {500}
      />

    </div>
  )
};

export default page;