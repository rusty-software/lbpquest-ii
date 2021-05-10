React has 3 fundamental concepts
	Components: user interfaces
		Really just functions
		Input is props and states, output is UI
			props are immutable; state is mutable
		Can have private state
	Reactive updates
		React pays attention to the state of the "dom tree" and "reacts" when it changes
		Updates the "browser," but only the parts that actually need to be changed
	Has virtual representations of views in memory
		Virtual dom (tree reconciliation algorithm)
		
jsx => html in javascript, not html templates
		
Class components and Function components
	Prefer Function components where possible

[https://jscomplete.com/playground](https://jscomplete.com/playground)
	a javascript repl that refers the most current versions of React and react-dom
	seems like it knows at least enough type script to handle a function component
		`const Hello = () => <div>Hello!</div>;`
		
	
	
