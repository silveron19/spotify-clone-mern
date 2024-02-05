import React from 'react';
import './style.css';
import Link from 'next/link';
import Card from '@/components/card/page';

function Home() {
  return (
    <div className="page-container">
      <div className="section-header">
        <p>Recently Played</p>
        <Link href="./section/recently-played">Show all</Link>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="section-header">
        <p>Made For Silveron</p>
        <Link href="./section/for-you">Show all</Link>
      </div>
      <div className="card-container">
        <Card />
      </div>
      <div className="section-header">
        <p>Recommended For Today</p>
        <Link href="./section/today-recommended">Show all</Link>
      </div>
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default Home;
