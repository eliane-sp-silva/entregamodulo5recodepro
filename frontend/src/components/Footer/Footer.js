import '../Footer/Footer.css';
import ColumnOne from './ColumnOne';
import ColumnTwo from './ColumnTwo';
import ColumnThree from './ColumnThree';
import ColumnFour from './ColumnFour';

function Footer(){
    return(
        <footer className=" w-100 row footer footerDiv1">    
        <section className="container w-100 stretch">
            <ColumnOne></ColumnOne>
            <ColumnTwo ></ColumnTwo>
            <ColumnThree ></ColumnThree>
            <ColumnFour ></ColumnFour>

        </section>
        <div className="w-100 b-footer">
            <p className="">
                ©Copyright 2021 - Eliane SP Silva - Todos os Direitos Reservados</p>
        </div>
        </footer>
    );
}
export default Footer;