import logoSokrates from '../assets/images/SokratesLogo.png';

const Logo = () => {

    const style = {
        width: '90px',
        height: '90px',
        color: 'white',
    };

    return (
        <div style={style}><img src={logoSokrates} alt="Logo" /></div>
    );
};

export default Logo;