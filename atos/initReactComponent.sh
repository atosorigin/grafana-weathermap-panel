#!/bin/bash

if [ "$#" -ne 2 ]; then
	echo "Nombre de parametre incorrect: ./initComponent.sh <NomDuComposant> <nomDuFichier.tsx>"
	exit
fi

echo "import React from 'react';

interface IProps {

}

interface IState {

}

/**
 * def
 */
class $1 extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {

		};
	}

	/**
	 * result
	 */
	public render() {
		return (
			<p>am here</p>
		);
	}
}
export default $1;
" > $2
