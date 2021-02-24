import React, {Component} from 'react';
import './index.scss';

class Map extends Component {
    constructor(props) {
        super(props);
        this.map = {};
        this.renderMap = this.renderMap.bind(this)
    }
    componentDidMount() {
        this.renderMap();
    }

    renderMap() {
        // let test = new window.BMap.Map("map-container");
        // this.map = new window.BMap.Map("map-container");
        // let point = new window.BMap.Point(116.404, 39.915);  // 创建点坐标
        // this.map.centerAndZoom(point, 15);
        // this.map.enableScrollWheelZoom(true);
    }

    render() {
        return (
            <div id="map-container" className="map-container"/>
        )
    }
}

export default Map;