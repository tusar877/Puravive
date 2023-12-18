import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  useEffect(() => {
    window.location.href = 'https://3778ahn8uft1zsae7fm4xdri1k.hop.clickbank.net';
  }, []);

  return null;
};

export default Home;
