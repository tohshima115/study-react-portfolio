import React, { useState } from 'react';
import './Nav.css';

function Nav() {
  const SidebarData = [
    {
      title: "Entrance",
      link: "/",
      ja:"エントランス"
    },{
      title: "About",
      link: "/about",
      ja:"略歴"
    },{
      title: "Works",
      link: "/works",
      ja:'実績'
    },{
      title: "Studies",
      link: "/studies",
      ja:"習作"
    },{
      title: "Contact",
      link: "/contact",
      ja:"コンタクト"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  console.log(hoveredIndex);

  return(
    <div className='nav'>
      <nav className='sidebar'>
        <ul className='sidebar-list'>
          {SidebarData.map((value, index) => {
            return (
              <li className={`list ${hoveredIndex === index ? "hovered" : ""} ${window.location.pathname === value.link ? "active" : ""}`} key={value.title} onClick={() => {
                window.location.pathname = value.link;
              }}
              onMouseEnter={() => setHoveredIndex(index)} // マウスが要素に入ったとき
              onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className='square'></div>
                <div id="title">{value.title}</div>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className='subtitles'>
        {SidebarData.map((value, index) => {
          return(
            <div className={`sub ${hoveredIndex === index ? "title" : ""}`} key={value.title}>"{value.ja}"</div>
          )
        })}
      </div>
    </div>
   );
}

export default Nav;