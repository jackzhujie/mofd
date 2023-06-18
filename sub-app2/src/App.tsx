import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import remoteRef from "./remoteConfig/remoteRef";

function App() {
    const [isInViewport, setIsInViewport] = useState(true);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    let util: any;

    useEffect(() => {
        let debouncedCheckViewport: { (this: HTMLDivElement, ev: Event): any; (this: HTMLDivElement, ev: Event): any; };
        (async () => {
            const { util: remoteUtil } = await remoteRef();
            console.log('run222');
            util = remoteUtil;

            const checkViewport = () => {
                const element = elementRef.current;
                const container = containerRef.current;
                if (element && container && util) {
                    const inViewport = util.isElementInViewport(element, container);
                    setIsInViewport(inViewport);
                }
            };
            console.log(util, 'util')
            if (util) {
                console.log('run111');
                debouncedCheckViewport = util.debounce(checkViewport, 500);
                if (containerRef.current) {
                    containerRef.current.addEventListener?.('scroll', debouncedCheckViewport);
                }
            }

        })();
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', debouncedCheckViewport);
            }
        };
    }, []);


    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>用baseApp工具函数来检测窗口</div>
                <p>是否在可视窗口：{isInViewport ? '是' : '否'}</p>
                <div
                    ref={containerRef}
                    style={{
                        width: '400px',
                        height: '200px',
                        border: '1px solid #ccc',
                        overflow: 'auto',
                    }}
                >
                    <div style={{ height: '450px' }}>
                        <div
                            ref={elementRef}
                            style={{
                                height: '100px',
                                background: isInViewport ? 'green' : 'red',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
