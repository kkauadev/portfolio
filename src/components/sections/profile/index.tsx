import React from "react";
import { useEffect, useState } from "react";
import "./style.scss";
import { ContactLinks } from "../../small/contact-links/index";

interface IData {
  avatar_url: string;
}

interface IFetchApiProps {
  url: string;
}

export async function fetchAPi({ url }: IFetchApiProps) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export const Profile = () => {
  const [apiImg, setApiImg] = useState<IData>();

  useEffect(() => {
    const getImg = async () => {
      const dataResponse: IData = await fetchAPi({
        url: "https://api.github.com/users/Kato2004",
      });
      setApiImg({ avatar_url: dataResponse.avatar_url });
    };
    getImg();
  }, []);

  return (
    <section className="profile">
      <div className="first-part">
        <img
          src={`${apiImg?.avatar_url}`}
          width={"200px"}
          height={"200px"}
          alt="Imagem de perfil de Kauã"
        />
        <div>
          <span>Por onde me encontrar:</span>
          <ContactLinks />
        </div>
      </div>
      <div className="last-part">
        <header>
          <span>Olá sou</span>
          <h3>Kauã Alves</h3>
        </header>
        <div>
          <p>
            Futuro desenvolvedor, dependente e apaixonado por tecnologia no
            geral, porém, meu foco de carreira é o front-end com tecnologias
            como javascript, typescript, react e css. Além disso sempre busco
            aprender cada vez mais e estar cada vez mais atualizado
          </p>
        </div>
      </div>
    </section>
  );
};
