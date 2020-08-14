import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/24723422?s=460&u=98706946d3ed382cc61655b9c9d65b4a2f0b262b&v=4" alt="foto avatar"/>
                        <div>
                            <strong>Diovane Luis Pacheti Nunes</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Lorem ipsum dolor sit, 
                        <br/> <br/>
                        amet consectetur adipisicing elit. Quod ratione omnis error pariatur mollitia asperiores qui consequatur repellat nam porro facere veniam doloribus nostrum, distinctio sunt cupiditate aspernatur voluptas. Ab?
                    </p>
                    <footer>
                        <p>
                            preço/hora
                            <strong>R$ 80:00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entre em contato
                        </button>
                    </footer>
                </article>
    )
}
export default TeacherItem;