import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { getTrendingMovies } from '../services/GlobalApi'

const screenWidth = window.innerWidth

function Slider() {
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingMovies = await getTrendingMovies()
        console.log(trendingMovies)
        setMovieList(trendingMovies)
      } catch (error) {
        console.error('Error fetching trending movies:', error)
      }
    }

    fetchData()
  }, [])

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110
  }

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110
  }

  return (
    <div>
      <HiChevronLeft
        className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer '
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth'
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            key={item.imdbID}
            src={item.Poster !== 'N/A' ? item.Poster : ''}
            alt={item.Title}
            className='min-w-full md:h-[310px] object-full object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
