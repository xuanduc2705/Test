import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image  from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import '../component/rank.css'
import banner from '../image/banner/banner.jpg'
import doi1 from '../image/ẢNH BÌNH CHỌN/BACK OFFICE.jpg'
import doi2 from '../image/ẢNH BÌNH CHỌN/CẦU GIẤY.jpg'
import doi3 from '../image/ẢNH BÌNH CHỌN/HỘI SỞ.jpg'
import doi4 from '../image/ẢNH BÌNH CHỌN/KINH DOANH CAO CẤP.jpg'
import doi5 from '../image/ẢNH BÌNH CHỌN/NAM HÀ NỘI.jpg'
import doi6 from '../image/ẢNH BÌNH CHỌN/THĂNG LONG.jpg'
import doi7 from '../image/ẢNH BÌNH CHỌN/TRUNG KÍNH.jpg'
import doi8 from '../image/ẢNH BÌNH CHỌN/ĐÔNG ĐÔ.jpg'
import { MdFavorite } from "react-icons/md";
import no_enter from '../image/binh chon/no-enter.png'
import warn from '../image/icon/warn.png'
import tick from '../image/icon/tick.png'
import { FaCrown } from "react-icons/fa6";

function Rank() {

    return(
        <>

        <div className="binhchon">
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{padding:'0'}}>
                        <div className="banner" style={{display: 'flex', justifyContent: 'center'}}>
                        <img
                            className="img w-100"
                            src={banner}
                            alt="datxanhmienbac"
                        />
                        </div>
                        
                        <div className="body">
                            <h1 className="title-binhchon">BẢNG XẾP HẠNG</h1>
                            <div className="col-12" style={{padding:'10% 10px 30px 10px', aspectRatio: '1/1'}}>
                                <div className="top3" style={{display:'flex',flexDirection:'row',position:'relative'}}>
                                <div className="1st" style={{ width: '50%', position: 'absolute', left: '25%', zIndex: '2' }}>
                                    <div style={{ width: '100%', overflow: 'hidden',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center' }}>
                                        <FaCrown style={{fontSize:'30px',color:'#FEBE10'}}/>
                                        <img src={doi2} style={{ borderRadius: '50%',width: '100%',aspectRatio: '1/1', objectFit: 'cover',border:'3px solid #FEBE10'}} />
                                        <span style={{color:'white',fontSize:'90%'}}>
                                            Sàn THĂNG LONG
                                        </span>
                                        <div className="result" style={{display:'flex',flexDirection:'row',alignItems: 'center', justifyContent: 'center',color:'white' }}>
                                            <span style={{fontWeight:'bold'}}>
                                            1234
                                            </span>
                                            <MdFavorite/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'15%'}}>
                                    <div class="2nd" style={{width:'35%',alignItems: 'center', justifyContent: 'center',display:'flex',flexDirection:'column'}}>
                                    <span style={{color:'white'}}>2</span>
                                        <img
                                        src={doi6}
                                        style={{width:'100%',aspectRatio: '1/1',borderRadius: '50%', overflow: 'hidden',border:'3px solid #FEBE10' }}
                                        />
                                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                        <span style={{marginTop:'30%',fontSize:'80%',color:'white'}}>
                                            Sàn THĂNG LONG
                                        </span>
                                        <div className="result" style={{display:'flex',flexDirection:'row',alignItems: 'center', justifyContent: 'center' ,color:'white'}}>
                                            <span style={{fontWeight:'bold'}}>
                                            1234
                                            </span>
                                            <MdFavorite/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="3rd" style={{width:'35%',alignItems: 'center', justifyContent: 'center',display:'flex',flexDirection:'column'}}>
                                    <span style={{color:'white'}}>3</span>
                                        <img
                                        src={doi1}
                                        style={{width:'100%',aspectRatio: '1/1',borderRadius: '50%', overflow: 'hidden',border:'3px solid #FEBE10' }}
                                        />
                                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                        <span style={{marginTop:'30%',fontSize:'80%',color:'white'}}>
                                            Sàn THĂNG LONG
                                        </span>
                                        <div className="result" style={{display:'flex',flexDirection:'row',alignItems: 'center', justifyContent: 'center',color:'white' }}>
                                            <span style={{fontWeight:'bold'}}>
                                            1234
                                            </span>
                                            <MdFavorite/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                    
                                </div>
                                
                            </div>


                            <div className="col-12">
                            <div class="card w-100" style={{marginBottom:'30px'}}>
                            <div class="card-body" style={{display:'flex',flexDirection:'row'}}>
                                <div className="col-2">
                                <span style={{padding:'5px 8px 5px 8px',borderRadius:'10px',border:'1px solid lightgrey',fontWeight:'bold',fontSize:'18px'}}>
                                    1
                                </span>
                                </div>
                                
                                <div className="col-8" style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{fontWeight:"bold"}}>
                                        Múa Cô Đôi Thượng Ngàn
                                    </span>
                                    <span>
                                        Sàn THĂNG LONG
                                    </span>
                                </div>
                                <div className="col-2" >
                                    <div className="result" style={{display:'flex',flexDirection:'row',marginTop:'20%'}}>
                                        <span style={{fontWeight:'bold',fontSize:'18px'}}>
                                        1234
                                        </span>
                                        <MdFavorite/>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            <div class="card w-100" style={{marginBottom:'30px'}}>
                            <div class="card-body" style={{display:'flex',flexDirection:'row'}}>
                                <div className="col-2">
                                <span style={{padding:'5px 8px 5px 8px',borderRadius:'10px',border:'1px solid lightgrey',fontWeight:'bold',fontSize:'18px'}}>
                                    1
                                </span>
                                </div>
                                
                                <div className="col-8" style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{fontWeight:"bold"}}>
                                        Múa Cô Đôi Thượng Ngàn
                                    </span>
                                    <span>
                                        Sàn THĂNG LONG
                                    </span>
                                </div>
                                <div className="col-2" >
                                    <div className="result" style={{display:'flex',flexDirection:'row',marginTop:'20%'}}>
                                        <span style={{fontWeight:'bold',fontSize:'18px'}}>
                                        1234
                                        </span>
                                        <MdFavorite/>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            <div class="card w-100" style={{marginBottom:'30px'}}>
                            <div class="card-body" style={{display:'flex',flexDirection:'row'}}>
                                <div className="col-2">
                                <span style={{padding:'5px 8px 5px 8px',borderRadius:'10px',border:'1px solid lightgrey',fontWeight:'bold',fontSize:'18px'}}>
                                    1
                                </span>
                                </div>
                                
                                <div className="col-8" style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{fontWeight:"bold"}}>
                                        Múa Cô Đôi Thượng Ngàn
                                    </span>
                                    <span>
                                        Sàn THĂNG LONG
                                    </span>
                                </div>
                                <div className="col-2" >
                                    <div className="result" style={{display:'flex',flexDirection:'row',marginTop:'20%'}}>
                                        <span style={{fontWeight:'bold',fontSize:'18px'}}>
                                        1234
                                        </span>
                                        <MdFavorite/>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            <div class="card w-100" style={{marginBottom:'30px'}}>
                            <div class="card-body" style={{display:'flex',flexDirection:'row'}}>
                                <div className="col-2">
                                <span style={{padding:'5px 8px 5px 8px',borderRadius:'10px',border:'1px solid lightgrey',fontWeight:'bold',fontSize:'18px'}}>
                                    1
                                </span>
                                </div>
                                
                                <div className="col-8" style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{fontWeight:"bold"}}>
                                        Múa Cô Đôi Thượng Ngàn
                                    </span>
                                    <span>
                                        Sàn THĂNG LONG
                                    </span>
                                </div>
                                <div className="col-2" >
                                    <div className="result" style={{display:'flex',flexDirection:'row',marginTop:'20%'}}>
                                        <span style={{fontWeight:'bold',fontSize:'18px'}}>
                                        1234
                                        </span>
                                        <MdFavorite/>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            <div class="card w-100" style={{marginBottom:'30px'}}>
                            <div class="card-body" style={{display:'flex',flexDirection:'row'}}>
                                <div className="col-2">
                                <span style={{padding:'5px 8px 5px 8px',borderRadius:'10px',border:'1px solid lightgrey',fontWeight:'bold',fontSize:'18px'}}>
                                    1
                                </span>
                                </div>
                                
                                <div className="col-8" style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{fontWeight:"bold"}}>
                                        Múa Cô Đôi Thượng Ngàn
                                    </span>
                                    <span>
                                        Sàn THĂNG LONG
                                    </span>
                                </div>
                                <div className="col-2" >
                                    <div className="result" style={{display:'flex',flexDirection:'row',marginTop:'20%'}}>
                                        <span style={{fontWeight:'bold',fontSize:'18px'}}>
                                        1234
                                        </span>
                                        <MdFavorite/>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            <div class="card w-100" style={{marginBottom:'30px'}}>
                            <div class="card-body" style={{display:'flex',flexDirection:'row'}}>
                                <div className="col-2">
                                <span style={{padding:'5px 8px 5px 8px',borderRadius:'10px',border:'1px solid lightgrey',fontWeight:'bold',fontSize:'18px'}}>
                                    1
                                </span>
                                </div>
                                
                                <div className="col-8" style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{fontWeight:"bold"}}>
                                        Múa Cô Đôi Thượng Ngàn
                                    </span>
                                    <span>
                                        Sàn THĂNG LONG
                                    </span>
                                </div>
                                <div className="col-2" >
                                    <div className="result" style={{display:'flex',flexDirection:'row',marginTop:'20%'}}>
                                        <span style={{fontWeight:'bold',fontSize:'18px'}}>
                                        1234
                                        </span>
                                        <MdFavorite/>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            <div class="card w-100" style={{marginBottom:'30px'}}>
                            <div class="card-body" style={{display:'flex',flexDirection:'row'}}>
                                <div className="col-2">
                                <span style={{padding:'5px 8px 5px 8px',borderRadius:'10px',border:'1px solid lightgrey',fontWeight:'bold',fontSize:'18px'}}>
                                    1
                                </span>
                                </div>
                                
                                <div className="col-8" style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{fontWeight:"bold"}}>
                                        Múa Cô Đôi Thượng Ngàn
                                    </span>
                                    <span>
                                        Sàn THĂNG LONG
                                    </span>
                                </div>
                                <div className="col-2" >
                                    <div className="result" style={{display:'flex',flexDirection:'row',marginTop:'20%'}}>
                                        <span style={{fontWeight:'bold',fontSize:'18px'}}>
                                        1234
                                        </span>
                                        <MdFavorite/>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            <div class="card w-100" style={{marginBottom:'30px'}}>
                            <div class="card-body" style={{display:'flex',flexDirection:'row'}}>
                                <div className="col-2">
                                <span style={{padding:'5px 8px 5px 8px',borderRadius:'10px',border:'1px solid lightgrey',fontWeight:'bold',fontSize:'18px'}}>
                                    1
                                </span>
                                </div>
                                
                                <div className="col-8" style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{fontWeight:"bold"}}>
                                        Múa Cô Đôi Thượng Ngàn
                                    </span>
                                    <span>
                                        Sàn THĂNG LONG
                                    </span>
                                </div>
                                <div className="col-2" >
                                    <div className="result" style={{display:'flex',flexDirection:'row',marginTop:'20%'}}>
                                        <span style={{fontWeight:'bold',fontSize:'18px'}}>
                                        1234
                                        </span>
                                        <MdFavorite/>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}
export default Rank