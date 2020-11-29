import React, { Component } from 'react';
export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Open to Network and suggestions. Feel free to contact me 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eigth columns footer-widgets">
                        <div className="widget">
                            <h4>Linked in :
                                {resumeData.LinkedinId}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}