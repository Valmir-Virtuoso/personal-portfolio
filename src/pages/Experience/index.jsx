import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

const Experience = () => {

    return (

        <div className="experience">

            <VerticalTimeline lineColor="#3E497A">
                
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2016 - 2018" 
                    iconStyle={{background: "#3E497A", color: "#FFF"}}
                    icon={<SchoolIcon />}

                >

                    <h3 className="vertical-timeline-element-title">Escola de Ensino médio - Horácio de Macedo</h3>
                    <p>Escola de horário integral perto do metro de maria da graça.</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2019 - 2021" 
                    iconStyle={{background: "#3E497A", color: "#FFF"}}
                    icon={<SchoolIcon />}

                >

                    <h3 className="vertical-timeline-element-title">Ensino Superior - Faculdade Estácio de Sá Campus praça onze</h3>
                    <p>Cursei Game Design, concluído mas esperando a emissão do diploma.</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2021 - até agora"
                    iconStyle={{background: "#3E497A", color: "#FFF"}}
                    icon={<SchoolIcon />}

                >

                    <h3 className="vertical-timeline-element-title">Kenzie Academy - Curso FullStack</h3>
                    <p>Cursando na Kenzie academy na parte de Back-End agora faltando apenas 5 meses para me formar.</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2021 - até agora"
                    iconStyle={{background: "#E9D35B", color: "#FFF"}}
                    icon={<WorkIcon />}

                >

                    <h3 className="vertical-timeline-element-title">Assistente técnico - Controladoria Geral do Estado RJ</h3>
                    <p>Emprego onde presto atendimento aos usuários da rede CGE para problemas relacionados a área de TI, já desenvolvi projetos sobre desenvolvimento web também.</p>

                </VerticalTimelineElement>

            </VerticalTimeline>

        </div>

    );

}

export default Experience;