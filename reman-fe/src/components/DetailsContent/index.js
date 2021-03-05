import React, { useEffect } from 'react';
import './index.css';
import calendar from '../../assets/image/calendar.svg';
import payment from '../../assets/image/payment.svg';
import user from '../../assets/image/user.svg';
import homes from '../../assets/image/homes.svg';
import itachi from '../../assets/image/Itachi.png';
import kisame from '../../assets/image/Hoshigaki_Kisame.png';
import maps from '../../assets/image/maps.png';
import akatsuki from '../../assets/image/Akatsuki.jpg';
import konoha from '../../assets/image/konoha.jpg';

const Index = ({ setLogin }) => {
  // useEffect(() => {
  //   setLogin(true);
  // }, []);

  return (
    <div className="details_wrapper">
      <div className="banner">
        <h3>Benner Content</h3>
      </div>
      <div className="wrapper_content_details">
        <div className="sidebar">
          <div className="color_h2_details_profile">
            <div className="setting_h2">
              <h1 className="the_date">Save The Date</h1>
            </div>
          </div>
          <div className="side_menu">
            <div className="wrapper_calendar">
              <img src={calendar} alt="Waktu acara" className="calendar" />
              <p className="side_label_calendar">
                <span className="span_label">Date</span> 27 Feb 2021
              </p>
            </div>
            <div className="wrapper_payment">
              <img src={payment} alt="Biaya" className="payment" />
              <p className="side_label_payment">
                <span className="span_label">Fee</span> Free
              </p>
            </div>

            <div className="wrapper_user">
              <img src={user} alt="Target peserta" className="user" />
              <p className="side_label_user">
                <span className="span_label">Dear</span> Ikhwan Only
              </p>
            </div>

            <div className="wrapper_homes">
              <img src={homes} alt="Tempat" className="homes" />
              <p className="side_label_homes">
                {' '}
                <span className="span_label">Place</span> Online in Zoom
              </p>
            </div>
          </div>
          <div className="color_h2_details_profile">
            <div className="setting_h2">
              <h1 className="the_date">Speaker</h1>
            </div>
          </div>
          <div className="speaker_man_1">
            <img src={itachi} alt="Host" className="img_speaker" />
            <div className="title_wrapper">
              <p className="title_speaker">Uch. Itachi</p>
              <p className="label_speaker">Host</p>
            </div>
          </div>
          <div className="speaker_man_2">
            <img src={kisame} alt="Host" className="img_speaker" />
            <div className="title_wrapper">
              <p className="title_speaker">Kisame</p>
              <p className="label_speaker">Pembicara</p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="color_h2_details_profile">
            <div className="setting_h2">
              <h1 className="the_date_2">About The Event</h1>
            </div>
          </div>
          <div className="text_acara">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              ipsam tempora! Dolor nulla maiores, repellat deleniti laboriosam
              consequatur. Ipsum, aliquam. Beatae recusandae laboriosam nisi
              reiciendis ipsum autem saepe? Consequuntur, minima?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis sint blanditiis harum voluptatum incidunt sapiente
              doloremque vel enim pariatur quasi, voluptate ab? Modi obcaecati
              dicta, fugiat minus tenetur omnis porro? Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Nisi, totam harum! Et mollitia
              fugit ad repudiandae alias odio ex laborum sunt ullam amet
              excepturi harum, eum magnam totam, ipsum cumque. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quam facilis quas omnis,
              dolorem iste esse possimus quae perferendis labore amet ut
              accusamus reiciendis odio enim asperiores nesciunt modi nisi. Et.
            </p>
          </div>
        </div>
      </div>
      <div className="img_plus">
        <img src={akatsuki} alt="panitia" className="img_plus_seting" />
        <img src={konoha} alt="tempat" className="img_plus_seting" />
      </div>
      <div className="img_maps">
        <img src={maps} alt="maps" className="img_maps_seting" />
      </div>
      <div className="people_review">
        <div className="scroll_menu">
          <div className="box_review">
            <div className="account_review">
              <img src={itachi} alt="account" className="img_speaker" />
              <p className="name_review">Uchiha Itachi</p>
            </div>
            <p className="text_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              expedita recusandae fugiat nihil culpa distinctio beatae esse
              voluptatibus, ipsa labore aliquam doloremque quod porro sapiente
              facere quia est. Molestiae, ipsa.
            </p>
          </div>
          <div className="box_review">
            <div className="account_review">
              <img src={itachi} alt="account" className="img_speaker" />
              <p className="name_review">Uchiha Itachi</p>
            </div>
            <p className="text_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              expedita recusandae fugiat nihil culpa distinctio beatae esse
              voluptatibus, ipsa labore aliquam doloremque quod porro sapiente
              facere quia est. Molestiae, ipsa.
            </p>
          </div>
          <div className="box_review">
            <div className="account_review">
              <img src={itachi} alt="account" className="img_speaker" />
              <p className="name_review">Uchiha Itachi</p>
            </div>
            <p className="text_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              expedita recusandae fugiat nihil culpa distinctio beatae esse
              voluptatibus, ipsa labore aliquam doloremque quod porro sapiente
              facere quia est. Molestiae, ipsa.
            </p>
          </div>
          <div className="box_review">
            <div className="account_review">
              <img src={itachi} alt="account" className="img_speaker" />
              <p className="name_review">Uchiha Itachi</p>
            </div>
            <p className="text_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              expedita recusandae fugiat nihil culpa distinctio beatae esse
              voluptatibus, ipsa labore aliquam doloremque quod porro sapiente
              facere quia est. Molestiae, ipsa.
            </p>
          </div>
          <div className="box_review">
            <div className="account_review">
              <img src={itachi} alt="account" className="img_speaker" />
              <p className="name_review">Uchiha Itachi</p>
            </div>
            <p className="text_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              expedita recusandae fugiat nihil culpa distinctio beatae esse
              voluptatibus, ipsa labore aliquam doloremque quod porro sapiente
              facere quia est. Molestiae, ipsa.
            </p>
          </div>
          <div className="box_review">
            <div className="account_review">
              <img src={itachi} alt="account" className="img_speaker" />
              <p className="name_review">Uchiha Itachi</p>
            </div>
            <p className="text_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              expedita recusandae fugiat nihil culpa distinctio beatae esse
              voluptatibus, ipsa labore aliquam doloremque quod porro sapiente
              facere quia est. Molestiae, ipsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
