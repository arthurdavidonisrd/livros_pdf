const area_livros = document.getElementById("main_livros")


const ladrao_d_raios = [
    {
        id:1,
        imagem: "percyjackson.jpg",
        pdf_file: "ldr.pdf"
    },
    {
        id:2,
        imagem: "mar_de_monstros.jpg",
        pdf_file: "mdm.pdf"
    },
    {
        id:3,
        imagem: "maldicao.jpg",
        pdf_file: "amdt.pdf"
    },
    {
        id:4,
        imagem: "labirinto.jpeg",
        pdf_file: "bdl.pdf"
    }

]


const catalago_harry_potter = [
    {
        id:1,
        imagem:"harry_potter_pedra_filosofal.jpg",
        pdf_file:"hp.pdf"

    },
    {
        id:2,
        imagem:"harry_potter_camara_secreta.jpg",
        pdf_file:"cs.pdf",

    },
    {
        id:3,
        imagem:"prisioneiro_de_askaban.jpg",
        pdf_file:"pda.pdf",

    },
    {
        id:4,
        imagem:"calice_de_fogo.jpg",
        pdf_file:"cdf.pdf",

    },
    {
        id:5,
        imagem:"ordem_da_fenix.jpg",
        pdf_file:"odf.pdf",

    },
    {
        id:6,
        imagem:"enigma_do_principe.jpg",
        pdf_file:"edp.pdf",

    },
    {
        id:7,
        imagem:"reliquias_da_morte.jpg",
        pdf_file:"rdm.pdf",

    },
    {
        id:8,
        imagem: "crianca_amaldicoada.jpg",
        pdf_file: "ca.pdf"
    }
    

]

for(const hp of catalago_harry_potter){
    const exibition = `


    <div class="mt-6 mb-6 px-3">
                <img 
                class="sm:w-[120px] sm:h-[170px] lg:w-[180px] lg:h-[250px] hover:scale-95 duration-200 " 
                src="assets/${hp.imagem}" 
                alt="Harry Potter e a Pedra Filosofal">

                <div>
                    <a class="font-bold ml-11" href="assets/${hp.pdf_file}" download="${hp.pdf_file}" type="application/${hp.pdf_file}">Baixar PDF</a>
                </div>

    </div>
    
    
    `
    area_livros.innerHTML += exibition


}


for(const percy of ladrao_d_raios){
    const show_books = `

    <div class="mt-6 mb-6 px-3">
        <img 
        class="sm:w-[120px] sm:h-[170px] lg:w-[180px] lg:h-[250px] hover:scale-95 duration-200 " 
        src="assets/${percy.imagem}" 
        alt="Harry Potter e a Pedra Filosofal">

        <div>
            <a class="font-bold ml-11" href="assets/${percy.pdf_file}" download="${percy.pdf_file}" type="application/${percy.pdf_file}">Baixar PDF</a>
        </div>

    </div>


    `

    area_livros.innerHTML += show_books
}



