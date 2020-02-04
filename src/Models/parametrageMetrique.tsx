/**
 * class for parametrage metric
 */
export class ParametrageMetrique {
	/**
	 * link to follow when click data in dashboard
	 */
	public followLink: string;
	/**
	 * link for tooltip
	 */
	public hoveringTooltipLink: string;
	/**
	 * text for tooltip
	 */
	public hoveringTooltipText: string;

	constructor(
		followLink: string,
		hoveringTooltipLink: string,
		hoveringTooltipText: string,
	) {
		this.followLink = followLink;
		this.hoveringTooltipLink = hoveringTooltipLink;
		this.hoveringTooltipText = hoveringTooltipText;
	}

	/**
	 * get followingLink
	 */
	get getFollowLink(): string {
		return this.followLink;
	}

	/**
	 * set followingLink
	 * @param {string} value new value
	 */
	set setFollowLink(value: string) {
		this.followLink = value;
	}

	/**
	 * get hoveringTooltipLink
	 */
	get getHoveringTooltipLink(): string {
		return this.hoveringTooltipLink;
	}

	/**
	 * setHoveringTooltipLink
	 * @param {string} value new value
	 */
	set setHoveringTooltipLink(value: string) {
		this.hoveringTooltipLink = value;
	}

	/**
	 * get hoveringTooltipText
	 */
	get getHoveringTooltipText(): string {
		return this.hoveringTooltipText;
	}

	/**
	 * set hoveringTooltipText
	 * @param {string} value new Value
	 */
	set setHoveringTooltipText(value: string) {
		this.hoveringTooltipText = value;
	}

}