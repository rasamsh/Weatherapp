import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data) / data.length);
}
class Chart extends Component {
	render() {
		const { data, units, color } = this.props;
		return (
			<div>
				<Sparklines height={120} width={180} data={data}>
					<SparklinesLine color={color} />
					<SparklinesReferenceLine type="avg" />
				</Sparklines>
				<div>
					{average(data)} {units}
				</div>
			</div>
		);
	}
}

export default Chart;
