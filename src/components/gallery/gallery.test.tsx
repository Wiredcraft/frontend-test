/**
 * Gallery component test
 * Fri Jul 24 16:36:15 2020
 * by xiaoT
 */
import React, { FC } from 'react'
import ReactDom from 'react-dom'
import { shallow, mount } from 'enzyme'

import Gallery from './'

const images = [
  {
    _id: '5f115174961c75468fbe0f44',
    index: 0,
    name: 'purple',
    src: 'https://picsum.photos/240/379?random=371',
  },
  {
    _id: '5f115174ad8e8ef73a0dab9e',
    index: 1,
    name: 'purple',
    src: 'https://picsum.photos/240/392?random=286',
  }
]

describe('Gallery Test', () => {
  let galleryComponent: any

  beforeEach(() => {
    galleryComponent  = shallow(<Gallery images={images} />)
  })
  afterEach(() => {
    galleryComponent.unmount()
  })
  // should be match the snapshot
  it('should be match the snapshot', () => {
    expect(galleryComponent.html()).toMatchSnapshot()
  })
  // Gallery should be have a NavBar compoent
  it('should be have a NavBar', () => {
    const NavBar = galleryComponent.find('NavBar')

    expect(NavBar.length).toEqual(1)
  })
  // Gallery should be have two Image compoent
  it('should be have a NavBar', () => {
    const Image = galleryComponent.find('Image')

    expect(Image.length).toEqual(images.length)
  })
})