import React from "react";
import myImage from "../images/npk_b&w.jpg";

const About = () => {
  return (
    <div className="page about">
      <div className="about__block">
        <div className="about__description">
          <h3 className="heading-medium">Jestem psychoterapeutką</h3>
          <p className="about__description--paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            similique dolor autem temporibus nam. Nostrum nemo atque unde
            quisquam harum, a provident amet facere necessitatibus magni illum
            veritatis impedit iusto maxime eum accusantium odio fuga suscipit,
            laboriosam alias numquam quos assumenda! Placeat quaerat voluptates
            ex magni mollitia? Autem odit quasi perspiciatis, recusandae minus
            doloribus, id porro quod nobis illum veritatis. Earum, sequi.
            Excepturi corrupti eum ex autem expedita harum, saepe totam ea
            cupiditate, dolores esse laudantium id doloribus. Accusantium
            numquam nulla veritatis aperiam animi, ex nisi dignissimos iure
            perspiciatis facere atque quae officiis molestias iste dolorum.
            Veritatis amet consectetur impedit.
          </p>
        </div>
        <div className="about__description">
          <h3 className="heading-medium">Jestem seksuolożką</h3>
          <p className="about__description--paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem earum
            unde accusantium sit suscipit consequatur id vero soluta? Minus
            voluptatem nisi officia magnam, totam earum aliquam asperiores quae
            distinctio culpa. Possimus tempore voluptatum saepe maxime earum
            molestias doloribus blanditiis molestiae sapiente officiis impedit,
            distinctio eligendi quibusdam repudiandae optio iste, fuga nobis
            iusto odio et voluptas ullam dignissimos, inventore sequi. Cumque
            corrupti ducimus aut animi commodi, sit doloribus rem provident.
            Illo, necessitatibus debitis! Unde, accusamus nulla? Sint enim nulla
            magnam officia tenetur, ab obcaecati veniam, accusantium ex sunt
            quia atque id nobis, tempora magni quasi a? Ipsum in repudiandae
            inventore voluptates.
          </p>
        </div>
        <div className="about__description">
          <h3 className="heading-medium">Jestem pasjonatką</h3>
          <p className="about__description--paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            tempora ex recusandae ratione alias. Accusantium deleniti recusandae
            quos velit nulla, inventore ullam aliquid voluptatem aspernatur
            laborum, ipsa delectus soluta. Expedita ratione impedit earum nobis
            accusantium sit incidunt voluptatibus saepe facilis voluptates
            dicta, reprehenderit amet officiis explicabo labore exercitationem.
            Rem deleniti sunt eum voluptates dolor, consequatur neque sequi
            nobis blanditiis rerum explicabo pariatur accusantium ipsa. Hic
            omnis illo ad quaerat? Facere ducimus iusto tempore nam corrupti
            dicta beatae, optio reprehenderit commodi quidem perferendis
            laboriosam tempora atque fugiat nemo hic eum error quis natus?
            Accusantium voluptatem enim tenetur odit dolor, similique eligendi?
          </p>
        </div>
      </div>
      <img src={myImage} alt="Kobieta w pniu drzewa" className="about__img" />
    </div>
  );
};

export default About;
