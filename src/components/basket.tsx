import React from 'react';

export function Basket() {

  const button: HTMLSpanElement | null = document.querySelector('span.arrow');

  if (button) {
      button.onclick = function () {
          const sidebar: HTMLElement | null = document.querySelector('.sidebar');
          const arrow: HTMLElement | null = document.querySelector('.arrow');
  
          if (sidebar && arrow) {
              sidebar.classList.toggle('d-none');
              arrow.classList.toggle('p-none');
          }
      };
  }
  
    return (
      <>
        
        <div className="sidebar">
            <span className="arrow">&leftarrow;</span>
            <h2>sidebar</h2>
        </div>

      </>
    );
  }