import React, { useEffect } from 'react';

import './index.css';
import Foto_acara from '../../assets/image/foto-acara.jpg';
import Shield from '../../assets/image/shield.svg';
import Lock from '../../assets/image/lock.svg';
import NowEvents from '../../parts/BoxEvents/NowEvents/index';
import NextEvents from '../../parts/BoxEvents/NextEvents/index';
import PastEvents from '../../parts/BoxEvents/PastEvents/index';
import Gap from 'parts/Gap';

function Index(props) {
  // useEffect(() => {
  //   props.setLogin(true);
  // }, []);
  return (
    <div>
      {/* NOW EVENTS */}
      <div className="card__newEvent">
        <div className="lebel">Now Events</div>
        <div className="container__acara">
          {/* NOW EVENTS Acara satu */}
          <NowEvents
            foto={Foto_acara}
            judul="Judul Acara"
            descripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias consequatur aspernatur corrupti voluptates voluptas
            laudantium inventore fuga est."
            point1="Point 1"
            point2="Point 2"
          />

          {/* NOW EVENTS Acara dua */}
          <Gap width={100} />
          <NowEvents
            foto={Foto_acara}
            judul="Judul Acara"
            descripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est."
            point1="Point 1"
            point2="Point 2"
          />

          {/* NOW EVENTS Acara tiga */}
          <Gap width={100} />
          <NowEvents
            foto={Foto_acara}
            judul="Judul Acara"
            descripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias consequatur aspernatur corrupti voluptates voluptas
              laudantium inventore fuga est."
            point1="Point 1"
            point2="Point 2"
          />
        </div>
      </div>
      {/* LAST NOW EVENTS*/}

      {/* NEXT EVENTS */}
      <div className="card__newEvent">
        <div className="lebel">Next Events</div>
        <div className="container__acara">
          {/* Next EVENTS Acara satu */}
          <NextEvents
            foto={Foto_acara}
            judul="Judul Acara"
            icon={Lock}
            descripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias consequatur aspernatur corrupti voluptates voluptas
            laudantium inventore fuga est."
            point1="Point 1"
            point2="Point 2"
          />

          {/* Next EVENTS Acara dua */}
          <Gap width={100} />
          <NextEvents
            foto={Foto_acara}
            judul="Judul Acara"
            icon={Lock}
            descripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias consequatur aspernatur corrupti voluptates voluptas
            laudantium inventore fuga est."
            point1="Point 1"
            point2="Point 2"
          />

          {/* Next EVENTS Acara tiga */}
          <Gap width={100} />
          <NextEvents
            foto={Foto_acara}
            judul="Judul Acara"
            icon={Lock}
            descripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias consequatur aspernatur corrupti voluptates voluptas
            laudantium inventore fuga est."
            point1="Point 1"
            point2="Point 2"
          />
        </div>
      </div>
      {/* LAST NEXT EVENTS */}

      {/* PAST EVENTS */}
      <div className="card__newEvent">
        <div className="lebel">Past Events</div>
        <div className="container__acara">
          {/* PAST EVENTS Acara satu */}
          <PastEvents
            foto={Foto_acara}
            judul="Judul Acara"
            icon={Shield}
            descripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias consequatur aspernatur corrupti voluptates voluptas
            laudantium inventore fuga est."
            point1="Point 1"
            point2="Point 2"
          />

          {/* PAST EVENTS Acara dua */}
          <Gap width={100} />
          <PastEvents
            foto={Foto_acara}
            judul="Judul Acara"
            icon={Shield}
            descripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias consequatur aspernatur corrupti voluptates voluptas
            laudantium inventore fuga est."
            point1="Point 1"
            point2="Point 2"
          />

          {/* PAST EVENTS Acara tiga */}
          <Gap width={100} />
          <PastEvents
            foto={Foto_acara}
            judul="Judul Acara"
            icon={Shield}
            descripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias consequatur aspernatur corrupti voluptates voluptas
            laudantium inventore fuga est."
            point1="Point 1"
            point2="Point 2"
          />
        </div>
      </div>
      {/* LAST PAST EVENTS */}
    </div>
  );
}

export default Index;
