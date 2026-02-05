export type LandingFeature = {
	id: string
	title: string
	video: string
	description: string
	highlights: string[]
}

export const landingFeatures: LandingFeature[] = [
	{
		id: "scrollable-preview",
		title: "Scrollable Preview",
		video: "videos/scrollable-preview.mp4",
		description: "Preview various types of files, and scroll the content of file while previewing.",
		highlights: ["Inline content navigation", "Fast preview updates", "Works across file types"],
	},
	{
		id: "visual-bulk-rename",
		title: "Visual Mode and Bulk Rename",
		video: "videos/visual-mode_bulk-rename.mp4",
		description: "Bulk select files in visual mode, and rename them.",
		highlights: ["Batch selection controls", "Safe rename loop", "Keyboard-first editing"],
	},
	{
		id: "vim-input-select",
		title: "Vim-like Input and Select",
		video: "videos/input_select.mp4",
		description: "Edit names quickly and choose open behavior using built-in input and select components.",
		highlights: ["Modal interaction", "Predictable keybindings", "Faster decision flows"],
	},
	{
		id: "multi-tab-jump",
		title: "Multi-Tab with fzf and zoxide",
		video: "videos/multi-tab_zoxide.mp4",
		description: "Navigate large directory trees quickly with multiple tabs and jump tools.",
		highlights: ["Tab-based workflows", "Jump to frequent paths", "Search-first navigation"],
	},
	{
		id: "task-management",
		title: "Multi-Select and Task Management",
		video: "videos/multi-select_task-management.mp4",
		description: "Queue file operations with task scheduling, progress tracking, and cancellation support.",
		highlights: ["Parallel-safe operations", "Live task feedback", "Cancelable jobs"],
	},
	{
		id: "incremental-find",
		title: "Incremental Find",
		video: "videos/incremental-find.mp4",
		description: "Find files as you type with instant match updates and clear position feedback.",
		highlights: ["Realtime matching", "Match count and position", "Zero context switch"],
	},
	{
		id: "search",
		title: "Search",
		video: "videos/search.mp4",
		description: "Search by name with fd, by content with rg, then act on results from the same flow.",
		highlights: ["Name and content search", "Toolchain-friendly", "Operate directly on results"],
	},
]

export type CardProps = {
	title: string
	description: string
}

export const cardsData: CardProps[] = [
	{
		title: "Full Asynchronous Support",
		description:
			"All I/O operations are asynchronous, CPU tasks are spread across multiple threads, making the most of available resources.",
	},
	{
		title: "Async Task Scheduling and Management",
		description: "Provides real-time progress updates, task cancellation, and internal task priority assignment.",
	},
	{
		title: "Support for Multiple Image Protocols",
		description: "Also integrated with Überzug++, covering almost all terminals.",
	},
	{
		title: "Code Highlighting and Image Encoding",
		description: "Combined with the pre-caching mechanism, greatly accelerates image and normal file loading.",
	},
]
