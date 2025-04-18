import './HeroImage.css';

function HeroImage(){
    const getResume=()=>{
        const link = document.createElement('a');
        link.href = '/Yeasin_Arafat_Resume.pdf';
        link.download = 'Yeasin_Arafat_Resume.pdf';
        link.click();
    }
    return (
        <header className="hero-image">
            <div className="hero-image__text">
                <h1 className="hero-image__title">Yeasin&nbsp;Arafat</h1>
                <p className="hero-image__subtitle">
                    Tech&nbsp;Enthusiast | SAP&nbsp;Learner&nbsp;&&nbsp;Future&nbsp;Consultant
                </p>
                <button onClick={getResume} className="hero-image__button">Download Resume</button>
            </div>
        </header>
    );
}

export default HeroImage;
