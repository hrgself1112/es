"use client"
import React from 'react'
import {Ui} from "@estivasoftech/ui"
type Props = {}

const page = (props: Props) => {



    async function fetchData() {
        try {
          const response = await fetch('/api');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          console.log('Data:', data.message);
          // Process the retrieved data here
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      fetchData();
      
  return (
    <div>
      
<Ui/>
zdfasfas
    </div>
  )
}

export default page