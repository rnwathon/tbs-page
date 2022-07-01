import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

import appStore from '../assets/appStore.png';
import bannerFooter from '../assets/bannerFooter.png';
import googlePlay from '../assets/googlePlay.png';
import Facebook from '../assets/icons/Facebook.svg';
import Instagram from '../assets/icons/Instagram.svg';
import TikTok from '../assets/icons/TikTok.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Youtube from '../assets/icons/Youtube.svg';
import logoWithText from '../assets/logoWithText.svg';
import qr from '../assets/qr.png';

const Footer = () => {
  return (
    <footer className="footer bg-tbs-primary p-4">
      <Container className="d-flex flex-column gap-5">
        <img src={bannerFooter} alt="banner footer" />
        <div className="d-flex gap-4">
          <div className="flex-fill">
            <Form>
              <Form.Select>
                <option> Indonesia </option>
                <option> English </option>
              </Form.Select>
            </Form>
          </div>
          <div className="flex-fill">
            <h5> Tentang The Body Shop </h5>
            <ul>
              <li>
                <a href="#">Cerita Kami</a>
              </li>
              <li>
                <a href="#">Temukan Kami</a>
              </li>
              <li>
                <a href="#">Acara</a>
              </li>
              <li>
                <a href="#">Denah Wbsite</a>
              </li>
              <li>
                <a href="#">Karir</a>
              </li>
            </ul>
          </div>
          <div className="flex-fill">
            <h5> Bantuan </h5>
            <ul>
              <li>
                <a href="#">Customer Care</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Delivery & Returns</a>
              </li>
              <li>
                <a href="#">Privacy Notice</a>
              </li>
              <li>
                <a href="#">Confirm Payment</a>
              </li>
            </ul>
          </div>
          <div className="flex-shrink-1 d-flex flex-column gap-2">
            <p>The Body Shop Di Genggamanmu, Unduh Sekarang!</p>
            <div className="d-flex gap-2">
              <img src={qr} />
              <div className="d-flex flex-column  gap-2">
                <img src={appStore} />
                <img src={googlePlay} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Form>
            <Form.Label
              style={{
                color: '#AAAAAA',
              }}
            >
              Tetap up-to-date dengan info terbaru kami
            </Form.Label>
            <div className="position-relative">
              <Form.Control
                type="email"
                placeholder="masukan alamat email"
                style={{
                  background: '#004236',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '4px solid #3A857E',
                }}
              ></Form.Control>
              <Button
                style={{
                  border: "none",
                  background: '#D6CE4B',
                  color: '#004236',
                  position: 'absolute',
                  right: 0,
                  top: '0',
                  padding: '.25em .5em'
                }}
              >
                Subscribe
              </Button>
            </div>
          </Form>
          <img src={logoWithText} />
          <div className="d-flex gap-4">
            <img width={32} height={32} src={Twitter} />
            <img width={32} height={32} src={Instagram} />
            <img width={32} height={32} src={Facebook} />
            <img width={32} height={32} src={Youtube} />
            <img width={32} height={32} src={TikTok} />
          </div>
        </div>
        <hr />
        <p className="text-center w-50 mx-auto" style={{ fontSize: '12px' }}>
          © 2020 THE BODY SHOP INTERNATIONAL LIMITED ® A REGISTERED TRADEMARK OF
          THE BODY SHOP INTERNATIONAL LIMITED ™ A TRADEMARK OF THE BODY SHOP
          INTERNATIONAL LIMITED ALL RIGHTS A THE BODY SHOP FRANCHISE OWNED AND
          OPERATED UNDER LICENSE BY PT. MONICA HIJAULESTARI
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
