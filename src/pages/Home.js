import React from "react";
import img1 from "../images/depression-2912424_1280.jpg";
import img2 from "../images/sunset-968832_1280.jpg";
import img3 from "../images/friendship-3585589_1280.jpg";

const Home = () => {
  return (
    <div className="page home">
      <div className="home__block home__block--1">
        <div className="home__intro">
          <h3 className="heading-medium">Dlaczego to mnie spotyka?</h3>
          <p className="home__intro--paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
            saepe nam molestiae natus deleniti praesentium optio atque beatae
            doloribus vero iste ab rerum culpa dicta numquam? Nam voluptatum
            blanditiis iusto iure consequatur ea sunt. Laborum harum nemo,
            deserunt asperiores odit repellat expedita consequatur tempora
            tenetur voluptate nisi maxime hic reprehenderit ipsa quia ab rerum
            repudiandae consequuntur molestias eveniet blanditiis autem nesciunt
            quidem illum! Architecto exercitationem porro magni commodi quasi
            error debitis labore? Soluta dolor at magnam iure eos consequuntur
            quaerat quas nemo libero, ea, ex enim corrupti cum, ipsa id saepe
            consequatur iusto voluptas a dolorum pariatur dignissimos nobis
            unde?
          </p>
        </div>
        <img
          src={img1}
          alt="Człowiek ukrywa twarz w dłoniach"
          className="home__img home__img--1"
        />
      </div>
      <div className="home__block home__block--2">
        <div className="home__intro">
          <h3 className="heading-medium">Czy jest dla mnie nadzieja?</h3>
          <p className="home__intro--paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            nihil. Harum quasi eligendi ut explicabo animi facilis beatae iure
            et illum, ea vitae voluptates nam vel fuga odit. Dolorem vero
            repellat voluptate quo provident totam mollitia cupiditate, earum
            beatae ab exercitationem maxime amet minima? Ea a maxime magnam
            repellendus assumenda aliquid adipisci sapiente soluta doloribus
            cumque minima distinctio quis, qui iure! Necessitatibus nemo illo
            vero, consequatur praesentium quia nobis dicta est ullam
            perspiciatis quibusdam veniam temporibus ea ratione saepe placeat
            ipsa fugiat repellat cumque! Aliquid, illo? Porro, dolorum amet!
            Facilis modi earum, sint officia sunt ullam reprehenderit minus
            veritatis culpa?
          </p>
        </div>
        <img
          src={img2}
          alt="Łódka na tle zachodzącego słońca"
          className="home__img home__img--2"
        />
      </div>
      <div className="home__block home__block--3">
        <div className="home__intro">
          <h3 className="heading-medium">Jak mogę sobie pomóc?</h3>
          <p className="home__intro--paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            quaerat possimus quae hic tenetur nobis suscipit labore earum atque
            rem dolores ad odio praesentium ut nostrum quasi ratione natus
            nesciunt voluptatibus unde, voluptas consequuntur sint. Officia
            labore laudantium non minus accusantium, autem cum unde perspiciatis
            adipisci nobis quae aliquid amet cumque numquam, eveniet commodi
            veritatis fugiat, in odio? Sit ipsam, voluptates eligendi, numquam
            illum debitis eius nihil expedita eveniet dicta id quam libero ut
            commodi laborum magni. Assumenda odio expedita asperiores quos atque
            dolores quibusdam velit vel cupiditate quia. Quod accusantium
            aliquam sequi architecto nemo facilis quaerat maxime omnis illum.
          </p>
        </div>
        <img
          src={img3}
          alt="Człowiek pomaga drugiemu wejść na skałę"
          className="home__img home__img--3"
        />
      </div>
    </div>
  );
};

export default Home;
