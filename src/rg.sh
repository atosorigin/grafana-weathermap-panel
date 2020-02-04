#!/bin/bash

if [ "$#" -ne 2 ]; then
	echo "Nombre de parametre incorrect: ./initComponent.sh <NomDuComposant> <nomDuFichier.tsx>"
	exit
fi

echo "import React from 'react';

import { SimpleOptions } from './types';
import { PanelEditorProps } from '@grafana/data';

interface IProps extends PanelEditorProps<SimpleOptions> { }


/**
 * def
 */
class $1 extends React.Component<IProps>{
    constructor(props: IProps) {
        super(props);
    }

	/**
	 * result
	 */
	public render() {

    const {options} = this.props;
		return (
			<p>am here</p>
		);
	}
}
export default $1;
" > $2
