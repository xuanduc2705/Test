import React from "react";
import { useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image  from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import '../component/binhchon.css'
import banner from '../image/banner/banner.jpg'
import { MdFavorite } from "react-icons/md";
import no_enter from '../image/binh chon/no-enter.png';
import warn from '../image/icon/warn.png';
import tick from '../image/icon/tick.png';
import { getListTeam, voteTeam } from "../lib/axios/index.js";
import { useNavigate } from 'react-router-dom';

function Binhchon() {
    const[data,setData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
   
              const response = await getListTeam();
              console.log(response)
              setData(response.data);

            
          };
      
          fetchData();
    },[])
  const [showCheckin, setShowCheckin] = useState(false);
  const handleCloseCheckin = () => {
    setShowCheckin(false);
  }
  const handleSubmitCheckin = ()=>{
    setShowCheckin(false);
    setShowCheckinSuccess(true)
  }
  const handleShowCheckin = () => setShowCheckin(true);

  const [showCheckinSuccess, setShowCheckinSuccess] = useState(false);
  const handleCloseCheckinSuccess = () => setShowCheckinSuccess(false);

  const [showBinhChon, setShowBinhChon] = useState(false);
  const handleCloseBinhChon = () => setShowBinhChon(false);
  const handleShowBinhChon = () => {
    setShowBinhChon(true)
  };

  const navigate = useNavigate();
  const [showBinhChonSuccess, setShowBinhChonSuccess] = useState(false);
  const handleCloseBinhChonSuccess = () => {
    setShowBinhChonSuccess(false);
    navigate('/');
    }
  const handleShowBinhChonSuccess = async () => {
    const res = await voteTeam({ teams: favoriteClicked })
    console.log(res);
    setShowBinhChon(false);

  setShowBinhChonSuccess(true);
  }

  const [favoriteClicked, setFavoriteClicked] = useState([]);
  const [count,setCount] = useState(0)
  const handleFavoriteClick = (_id) => {
        if (!favoriteClicked.includes(_id)) {
            setFavoriteClicked(pre => [...pre, _id])
            setCount(pre => pre + 1)
        } else {
            setFavoriteClicked(pre => pre.filter(p => p !== _id))
            setCount(pre => pre - 1)
        }
  };
  return (
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
                            <h1 className="title-binhchon">CỔNG BÌNH CHỌN</h1>
                            <div className="col-12" >
                                <div className="thele" style={{margin:'0 auto'}}>
                                    <span>
                                        Thể lệ
                                    </span>
                                    <p>Bình chọn <strong>3</strong> tiết mục mà bạn yêu thích nhất</p>
                                </div>
                                <div className="list">
                                    {data.map((doithi, index) => (
                                        <div className="baithi" style={{ marginBottom: '20px', padding: '0 20px 0 20px', position: 'relative' }} key={index}>
                                            <img
                                            className="card-img-top w-100"
                                            src={doithi.image}
                                            alt="Card image cap"
                                            style={{ width: '100%', borderRadius: '20px', border: '3px solid #00BFFF' }}
                                            />
                                            <div className="thongtin" style={{ position: 'absolute', left: '40px', bottom: '10px', padding: '0px' }}>
                                            <span className="showname">
                                                {doithi.projectName}
                                            </span>
                                            <p className="groupname" style={{ textAlign: 'left', fontWeight: '400' }}>
                                                {doithi.name}
                                            </p>
                                            {favoriteClicked.includes(doithi._id) ? (
                                                <button className="button-binhchon" onClick={() => handleFavoriteClick(doithi._id)}>
                                                <span>
                                                    Bình chọn
                                                </span>
                                                <MdFavorite className="favou-icon-love" />
                                                </button>
                                            ) : (
                                                <button style={{ opacity: count>= 3 ? 0.9 : 1 }} disabled={count>= 3} className="button-binhchon" onClick={() => {
                                                    if (count < 3) handleFavoriteClick(doithi._id)
                                                }}>
                                                <span>
                                                    Bình chọn
                                                </span>
                                                <MdFavorite className="favou-icon" />
                                                </button>
                                            )}
                                            </div>
                                        </div>
                                    ))}
                                <Button  
                        onClick={handleShowBinhChon} 
                        className=" btn btn-danger w-100"
                        style={{ margin:'0 0 20px 0'}} 
                        disabled={count !== 3}
                        >
                                Bình chọn ({count})
                        </Button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="Warning">
                        <Modal show={showBinhChon} onHide={handleCloseBinhChon} className="modalWarning" centered>
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body >
                                    <div className="modal-image">
                                        <Image
                                            src={warn}
                                            centered
                                            style={{borderRadius:'50%',width:'150px'}}
                                        />
                                    </div>
                                    <h1 style={{fontSize:'20px',fontWeight:'700',textAlign:"center"}}>Bạn có chắc chắn bình chọn cho 3 tiết mục này?</h1>
                                </Modal.Body>
                                <Modal.Footer style={{ display: "flex", flexDirection: "row",alignItems:'center',justifyContent:'center'}}>
                                <Button 
                                className="btn btn-default"
                                style={{width:'40%',borderColor:'#E23D28',backgroundColor:'white',color:'#E23D28'}} 
                                onClick={handleCloseBinhChon}
                                >
                                    Quay lại
                                </Button>
                                <Button 
                                className="btn btn-danger" 
                                style={{width:'40%'}} 
                                onClick={handleShowBinhChonSuccess}
                                >
                                    Xác nhận
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                        <div className="CheckinSuccess">
                        <Modal show={showBinhChonSuccess} onHide={handleCloseBinhChonSuccess} className="modalCheckinSuccess" centered>
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body >
                                    <div className="modal-image">
                                        <Image
                                            src={tick}
                                            centered
                                            style={{borderRadius:'50%',width:'150px'}}
                                        />
                                    </div>
                                    <h2>Bình chọn thành công</h2>
                                    <p >Cảm ơn bạn đã bình chọn cho tiết mục!</p>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      
    </>
  );
}

export default Binhchon;