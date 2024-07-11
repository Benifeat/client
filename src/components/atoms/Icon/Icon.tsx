import React, { useEffect, useState } from 'react';
import { StyledIcon } from './Icon.styles';

type IconNames =
	'arrowbigger'
	| 'bell'
	| 'calendar'
	| 'chart'
	| 'clock'
	| 'crown'
	| 'dumbbell'
	| 'edit'
	| 'flame'
	| 'globe'
	| 'heart'
	| 'help'
	| 'hollowflame'
	| 'home'
	| 'magnifyingglass'
	| 'minus'
	| 'moon'
	| 'plus'
	| 'runner'
	| 'runshoe'
	| 'settings'
	| 'watercup';

type IconProps = {
	iconName: IconNames;
	color?: string;
	size?: number;
}

const Icon: React.FC<IconProps> = ({ iconName, size = 20, color = 'black' }) => {
	const [SVGComponent, setSVGComponent] = useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);

	useEffect(() => {
		const importSVGComponent = async () => {
			try {
				const { default: svg } = await import(`./assets/${iconName}.svg?react`);
				setSVGComponent(() => svg);
			} catch (error) {
				console.error(`Failed to load SVG component ${iconName}:`, error);
			}
		};

		importSVGComponent();
	}, [iconName]);

	if (!SVGComponent) return null;

	return <StyledIcon as={SVGComponent} width={size} height={size} color={color} />
};

export default Icon;