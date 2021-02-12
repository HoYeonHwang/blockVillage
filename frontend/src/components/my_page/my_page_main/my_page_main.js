import React, { useEffect, useRef, useState } from 'react';
import MyInfoContainer from '../../../containers/my_info_container';
import MyBlockContainer from '../../../containers/my_block_container';
import styles from './my_page_main.module.css';
import MyMissionContainer from '../../../containers/my_mission_container';
import MyProjectContainer from '../../../containers/my_project_container';
import Nav from '../../nav/nav';

import ScrollContainer from 'react-indiana-drag-scroll'
import MyPageNavbar from '../my_page_navbar/my_page_navbar';

const MyPageMain = ({ imageInfo, onChageBasic, onChageSea, onChageSpace }) => {
    const [ openType, setOpenType ] = useState('');
    const [ modal, setModal ] = useState(false);

    // 모달 열기
    const openCard = (e) => {
        setOpenType(e.target.value);
        setModal(true);
    }

    const openCardInfo = () => {
        setOpenType('info');
        setModal(true);
    };

    const openCardBlock = () => {
        setOpenType('block');
        setModal(true);
    }

    const openCardMission = () => {
        setOpenType('mission');
        setModal(true);
    }

    const openCardProject = () => {
        setOpenType('project');
        setModal(true);
    }

    // 모달 닫기
    const closeModal = () => {
        setOpenType('');
        setModal(false);
    }

    //========이미 관련======================================
    const back_back = useRef();
    const my_page_ref = useRef();
    const info_img = useRef();
    const block_img = useRef();
    const mission_img = useRef();
    const project_img = useRef();

    useEffect(() => {
        
    })

    useEffect(() => {
        const item = my_page_ref.current;
        item.style.width = `${3565*(back_back.current.clientHeight/1081)}px`;
        my_page_ref.current.style.background = `100%/100% url(/images/mypageImg/${imageInfo.background}.png)`

        const x = (3565*(back_back.current.clientHeight/1081))/3565;
        const y = back_back.current.clientHeight/1081;

        

        info_img.current.style.width = `${1101 * x}px`;
        info_img.current.style.height = `${651 * y}px`;
        info_img.current.style.background = `100%/100% url(/images/mypageImg/${imageInfo.info}.png)`

        block_img.current.style.width = `${501 * x}px`;
        block_img.current.style.height = `${871 * y}px`;
        block_img.current.style.background = `100%/100% url(/images/mypageImg/${imageInfo.block}.png)`

        mission_img.current.style.width = `${641 * x}px`;
        mission_img.current.style.height = `${871 * y}px`;
        mission_img.current.style.background = `100%/100% url(/images/mypageImg/${imageInfo.mission}.png)`

        project_img.current.style.width = `${981 * x}px`;
        project_img.current.style.height = `${481 * y}px`;
        project_img.current.style.background = `100%/100% url(/images/mypageImg/${imageInfo.project}.png)`
    })

    // const changeSize = () => {
    //     const item = my_page_ref.current;
    //     item.style.width = `${3565*(back_back.current.clientHeight/1081)}px`;
    //     my_page_ref.current.style.background = "100%/100% url(/images/mypageImg/my_page_basic_bg.png)"

    //     const x = (3565*(back_back.current.clientHeight/1081))/3565;
    //     const y = back_back.current.clientHeight/1081;
        
    //     item.style.background = `url(/images/mypageImg/my_page_basic_bg.png)`

    //     info_img.current.style.width = `${1101 * x}px`;
    //     info_img.current.style.height = `${651 * y}px`;

    //     block_img.current.style.width = `${501 * x}px`;
    //     block_img.current.style.height = `${871 * y}px`;

    //     mission_img.current.style.width = `${641 * x}px`;
    //     mission_img.current.style.height = `${871 * y}px`;

    //     project_img.current.style.width = `${981 * x}px`;
    //     project_img.current.style.height = `${481 * y}px`;
    // };

    return (
        <div className={styles.body} ref={back_back} 
        // onClick={changeSize}
        >
            <MyPageNavbar 
                onChageBasic={onChageBasic}
                onChageSea={onChageSea}
                onChageSpace={onChageSpace}
            />

            <ScrollContainer
                className="scroll-container"
                className={styles.scrollcontainer}
                vertical={true}
            >
                <div 
                    className={styles.background_img} 
                    ref={my_page_ref}
                    draggable="true"
                >
                    <div 
                        className={styles.info_img} 
                        ref={info_img} 
                        onClick={openCardInfo} 
                        value="info"
                    ></div>

                    <div 
                        className={styles.block_img} 
                        ref={block_img}
                        onClick={openCardBlock}
                        value="block"
                    ></div>

                    <div 
                        className={styles.mission_img} 
                        ref={mission_img}
                        onClick={openCardMission}
                        value="mission"
                    ></div>

                    <div 
                        className={styles.project_img} 
                        ref={project_img}
                        onClick={openCardProject}
                        value="project"
                    ></div>

                </div>
            </ScrollContainer>
            
            {  modal && openType === 'info' &&
                <div className={styles.modal_wrapper}>
                    <div className={styles.modal}>
                        <MyInfoContainer
                            closeModal={closeModal}/>
                    </div>
                </div>
            }

            {  modal && openType === 'block' &&
                <div className={styles.modal_wrapper}>
                    <div className={styles.modal}>
                        <MyBlockContainer
                            closeModal={closeModal}/>
                    </div>
                </div>
            }

            {  modal && openType === 'mission' &&
                <div className={styles.modal_wrapper}>
                    <div className={styles.modal}>
                        <MyMissionContainer
                            closeModal={closeModal}/>
                    </div>
                </div>
            }

            {  modal && openType === 'project' &&
                <div className={styles.modal_wrapper}>
                    <div className={styles.modal}>
                        <MyProjectContainer
                            closeModal={closeModal}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default MyPageMain;