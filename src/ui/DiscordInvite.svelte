<script lang="ts">
	export let serverName: string;
	export let verified: boolean = false;
</script>

<div class="discord-invite">
	<h5 class="discord-invite-text">You have been invited to join a server</h5>
	<div class="discord-invite-body">
		<div class="discord-invite-image" />
		<div class="discord-invite-details">
			<h3 class="discord-invite-name">
				{#if verified}
					<div class="discord-invite-verified">
						<svg
							class="discord-invite-verified-svg"
							aria-hidden="false"
							width="16"
							height="16"
							viewBox="0 0 16 15.2"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
							/></svg
						>
						<div class="discord-invite-verified-tick">
							<svg
								class="discord-invite-verified-tick-svg"
								aria-hidden="false"
								width="16"
								height="16"
								viewBox="0 0 16 15.2"
								><path
									d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
									fill="currentColor"
								/></svg
							>
						</div>
					</div>
				{/if}
				{serverName}
			</h3>
			<div class="discord-invite-counts">
				<i class="discord-invite-status-icon discord-invite-online-icon" />
				<strong class="discord-invite-count">X,XXX Online</strong>
				<i class="discord-invite-status-icon discord-invite-offline-icon" />
				<strong class="discord-invite-count">Y,YYY Members</strong>
			</div>
		</div>
		<a type="button" class="discord-invite-join-button" href="https://discord.gg/INVITE-CODE">
			Join
		</a>
	</div>
</div>

<style lang="scss">
	.discord-invite {
		background-color: rgb(47, 49, 54);
		border-radius: 4px;
		box-sizing: border-box;
		height: 110px;
		padding: 16px;
		width: 432px;
		font-family: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 14px;
	}
	.discord-invite-text {
		block-size: 16px;
		font-size: 12px;
		height: 16px;
		margin-bottom: 12px;
		margin-top: 0px;
		text-transform: uppercase;
		color: rgb(185, 187, 190);
	}
	.discord-invite-body {
		display: flex;
		justify-content: center;
		width: 400px;
	}
	.discord-invite-image {
		background-image: url("https://cdn.discordapp.com/icons/SERVER-ID/SERVER-ICON-HASH.png?size=128");
		background-position: 50% 50%;
		background-size: 100% 100%;
		border-radius: 15px;
		margin-right: 16px;
		width: 50px;
	}
	.discord-invite-details {
		block-size: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 246.2px;
	}
	.discord-invite-name {
		margin: 0px;
		color: white;
		display: flex;
	}
	.discord-invite-verified {
		color: rgb(114, 137, 218);
		display: flex;
		margin-right: 8px;
	}
	.discord-invite-verified-tick {
		display: flex;
		position: absolute;
	}
	.discord-invite-verified-tick-svg {
		color: white;
	}
	.discord-invite-counts {
		margin: 0px;
		align-items: center;
		display: flex;
		color: rgb(185, 187, 190);
	}
	.discord-invite-status-icon {
		block-size: 8px;
		border-radius: 50%;
		inline-size: 8px;
		margin-right: 4px;
	}
	.discord-invite-online-icon {
		background-color: rgb(67, 181, 129);
	}
	.discord-invite-offline-icon {
		background-color: rgb(116, 127, 141);
	}
	.discord-invite-join-button {
		border-radius: 3px;
		align-items: center;
		background-color: rgb(67, 181, 129);
		block-size: 40px;
		box-sizing: border-box;
		color: white;
		display: flex;
		inline-size: 77.8px;
		justify-content: center;
		margin-left: 10px;
		padding: 2px 20px;
		text-decoration: none;
	}
	.discord-invite-count {
		font-size: 12px;
		margin-right: 8px;
	}
</style>
