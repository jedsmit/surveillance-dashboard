import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
import geeJoon1 from '../assets/GeeJoon1.png';
import geeJoon2 from '../assets/GeeJoon2.png';
import teen from '../assets/Teen.png';
import day from '../assets/Day.png';
import yun from '../assets/Yun.png';
import gor from '../assets/Gor.png';
import mui from '../assets/Mui.png';
import cheongSaam from '../assets/CheongSaam.png';
import barnTant from '../assets/BarnTant.png';
import fooTao from '../assets/FooTao.png';
import pingFung from '../assets/PingFung.png';
import kukoChut from '../assets/KukoChut.png';
import lingLumLuk from '../assets/LingLumLuk.png';
import chapGowOne from '../assets/ChapGow1.png';
import chapGowTwo from '../assets/ChapGow2.png';
import chapBartOne from '../assets/ChapBart1.png';
import chapBartTwo from '../assets/ChapBart2.png';
import chapChutOne from '../assets/ChapChut1.png';
import chapChutTwo from '../assets/ChapChut2.png';
import chapNgOne from '../assets/ChapNg1.png';
import chapNgTwo from '../assets/ChapNg2.png';

//styled components
const Container = styled.div`
  color: ${Colors.backgroundColor};
  background-image: ${Colors.blueGradient};
  font-weight: bold;
  padding: ${spacing.xxs};
`;

const TitleText = styled.h3`
  font-weight: bold;
`;

const SubTitleText = styled.h6`
  font-weight: bold;
`;

const TileCard = styled.div`
  height: 100%;
  padding: ${spacing.sm};
`;
const BoChart = () => {
  return (
    <Container className='container-fluid mx-auto px-3'>
      <div className='row'>
        <TitleText className='mx-auto'>Bo</TitleText>
      </div>
      <div className='row'>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={geeJoon1} alt='Gee Joon Tile' />
              <img className='img-fluid' src={geeJoon2} alt='Gee Joon Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Gee Joon</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={teen} alt='Teen Tile' />
              <img className='img-fluid' src={teen} alt='Teen Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Teen</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={day} alt='Day Tile' />
              <img className='img-fluid' src={day} alt='Day Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Day</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={yun} alt='Yun Tile' />
              <img className='img-fluid' src={yun} alt='Yun Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Yun</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={gor} alt='Gor Tile' />
              <img className='img-fluid' src={gor} alt='Gor Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Gor</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={mui} alt='Mui Tile' />
              <img className='img-fluid' src={mui} alt='Mui Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Mui</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img
                className='img-fluid'
                src={cheongSaam}
                alt='Cheong Saam Tile'
              />
              <img
                className='img-fluid'
                src={cheongSaam}
                alt='Cheong Saam Tile'
              />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Cheong Saam</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={barnTant} alt='Barn Tant Tile' />
              <img className='img-fluid' src={barnTant} alt='Barn Tant Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Barn Tant</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={fooTao} alt='Foo Tao Tile' />
              <img className='img-fluid' src={fooTao} alt='Foo Tao Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Foo Tao</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={pingFung} alt='Ping Fung Tile' />
              <img className='img-fluid' src={pingFung} alt='Ping Fung Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Ping Fung</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={kukoChut} alt='Kuko Chut Tile' />
              <img className='img-fluid' src={kukoChut} alt='Kuko Chut Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Kuko Chut</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img
                className='img-fluid'
                src={lingLumLuk}
                alt='Ling Lum Luk Tile'
              />
              <img
                className='img-fluid'
                src={lingLumLuk}
                alt='Ling Lum Luk Tile'
              />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Ling Lum Luk</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={chapGowOne} alt='Chap Gow Tile' />
              <img className='img-fluid' src={chapGowTwo} alt='Chap Gow Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Chap Gow</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img
                className='img-fluid'
                src={chapBartOne}
                alt='Chap Bart Tile'
              />
              <img
                className='img-fluid'
                src={chapBartTwo}
                alt='Chap Bart Tile'
              />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Chap Bart</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img
                className='img-fluid'
                src={chapChutOne}
                alt='Chap Chut Tile'
              />
              <img
                className='img-fluid'
                src={chapChutTwo}
                alt='Chap Chut Tile'
              />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Chap Chut</SubTitleText>
            </div>
          </div>
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center mx-auto'>
          <div className='row justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <img className='img-fluid' src={chapNgOne} alt='Chap Ng Tile' />
              <img className='img-fluid' src={chapNgTwo} alt='Chap Ng Tile' />
            </div>
            <div className='w-100'></div>
            <div className='col-10 mx-auto text-center'>
              <SubTitleText>Chap Ng</SubTitleText>
            </div>
          </div>
        </TileCard>
        {/* 
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={yun} alt='Yun Tile' />
          <img className='img-fluid' src={yun} alt='Yun Tile' />
        </TileCard>
      </div>
      <div className='row'>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={gor} alt='Gor Tile' />
          <img className='img-fluid' src={gor} alt='Gor Tile' />
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={mui} alt='Mui Tile' />
          <img className='img-fluid' src={mui} alt='Mui Tile' />
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={cheongSaam} alt='Cheong Saam Tile' />
          <img className='img-fluid' src={cheongSaam} alt='Cheong Saam Tile' />
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={barnTant} alt='Barn Tant Tile' />
          <img className='img-fluid' src={barnTant} alt='Barn Tant Tile' />
        </TileCard>
      </div>
      <div className='row'>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={fooTao} alt='Foo Tao Tile' />
          <img className='img-fluid' src={fooTao} alt='Foo Tao Tile' />
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={pingFung} alt='Ping Fung Tile' />
          <img className='img-fluid' src={pingFung} alt='Ping Fung Tile' />
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={kukoChut} alt='Kuko Chut Tile' />
          <img className='img-fluid' src={kukoChut} alt='Kuko Chut Tile' />
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={lingLumLuk} alt='Ling Lum Luk Tile' />
          <img className='img-fluid' src={lingLumLuk} alt='Ling Lum Luk Tile' />
        </TileCard>
      </div>
      <div className='row'>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={chapGowOne} alt='Chap Gow Tile' />
          <img className='img-fluid' src={chapGowTwo} alt='Chap Gow Tile' />
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={chapBartOne} alt='Chap Bart Tile' />
          <img className='img-fluid' src={chapBartTwo} alt='Chap Bart Tile' />
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={chapChutOne} alt='Chap Chut Tile' />
          <img className='img-fluid' src={chapChutTwo} alt='Chap Chut Tile' />
        </TileCard>
        <TileCard className='col-sm-3 d-flex justify-content-center'>
          <img className='img-fluid' src={chapNgOne} alt='Chap Ng Tile' />
          <img className='img-fluid' src={chapNgTwo} alt='Chap Ng Tile' />
        </TileCard> */}
      </div>
    </Container>
  );
};

export default BoChart;
