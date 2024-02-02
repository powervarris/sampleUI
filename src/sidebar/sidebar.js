import sidebar from './sidebar.css';

function Sidebar() {
    return(
        <div className="sidenav">
            <ul>
                <li className="sidelist">
                    <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SUNPTi8yMC/kvqflr7wv6aaW6aG1X+mAieS4rTwvdGl0bGU+CiAgICA8ZyBpZD0iSUNPTi8yMC/kvqflr7wv6aaW6aG1X+mAieS4rSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IklDT04vNDAiPgogICAgICAgICAgICA8ZyBpZD0i5Y2g5L2NIiBvcGFjaXR5PSIwIiBzdHJva2U9IiM5Nzk3OTciPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LDQgTDE2LDE2IEw0LDE2IEw0LDQgTDE2LDQgWiIgaWQ9IlJlY3RhbmdsZS0zLUNvcHktMiIgc3Ryb2tlLXdpZHRoPSI4IiBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0yIiBvcGFjaXR5PSIwLjMiIHg9IjIuMzMyNjUzMDYiIHk9IjIuMyIgd2lkdGg9IjE1LjMzNDY5MzkiIGhlaWdodD0iMTUuNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTIiIG9wYWNpdHk9IjAuMyIgeD0iMy4zNjUzMDYxMiIgeT0iMS4zIiB3aWR0aD0iMTMuMjY5Mzg3OCIgaGVpZ2h0PSIxNy40Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMiIgb3BhY2l0eT0iMC4zIiB4PSIxLjMiIHk9IjMuNCIgd2lkdGg9IjE3LjQiIGhlaWdodD0iMTMuMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBvcGFjaXR5PSIwLjMiIGN4PSIxMCIgY3k9IjEwIiByPSI4LjciPjwvY2lyY2xlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS4xODI3MjczLDIuMzg2NzEwMDkgTDE2LjY4MjcyNzMsNi40MTUwNDQxIEMxNy4xOTY0Nzc1LDYuNzkxMzI3MjcgMTcuNSw3LjM4OTU1NzYgMTcuNSw4LjAyNTg1NTAxIEwxNy41LDE2LjAwMjQ3OSBDMTcuNSwxNy4xMDU2Nzk0IDE2LjYwNDU2OTUsMTggMTUuNSwxOCBMMTQsMTggQzEyLjg5NTQzMDUsMTggMTIsMTcuMTA0NTY5NSAxMiwxNiBMMTIsMTQuMDA0OTU4IEwxMiwxNC4wMDQ5NTggQzEyLDEzLjIwNzEwNzcgMTEuMzc1NTQsMTIuNTU0OTI3MSAxMC41ODgxMzY0LDEyLjUwOTM2MDQgTDEwLjUsMTIuNTA2ODE3MyBMOS41LDEyLjUwNjgxNzMgQzguNzAxMTU5NTYsMTIuNTA2ODE3MyA4LjA0ODE2OTU2LDEzLjEzMDUwMzIgOC4wMDI1NDYzNSwxMy45MTY5MzA5IEw4LDE0LjAwNDk1OCBMOCwxNiBDOCwxNy4xMDQ1Njk1IDcuMTA0NTY5NSwxOCA2LDE4IEw0LjUsMTggTDQuNSwxOCBDMy4zOTU0MzA1LDE4IDIuNSwxNy4xMDU2Nzk0IDIuNSwxNi4wMDI0NzkgTDIuNSw4LjAyNTg1NTAxIEMyLjUsNy4zODk1NTc2IDIuODAzNTIyNDcsNi43OTEzMjcyNyAzLjMxNzI3MjY3LDYuNDE1MDQ0MSBMOC44MTcyNzI2NywyLjM4NjcxMDA5IEM5LjUyMTI1NDUxLDEuODcxMDk2NjQgMTAuNDc4NzQ1NSwxLjg3MTA5NjY0IDExLjE4MjcyNzMsMi4zODY3MTAwOSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMzMzMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="></img>
                    <a className="sideTop">
                        Home
                    </a>
                </li>
                <li className="sidelist">
                    <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SUNPTi8yMC/kvqflr7wvQW5pbWVf5pyq6YCJ5LitPC90aXRsZT4KICAgIDxnIGlkPSJJQ09OLzIwL+S+p+WvvC9BbmltZV/mnKrpgInkuK0iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLljaDkvY0iIG9wYWNpdHk9IjAiIHN0cm9rZT0iIzk3OTc5NyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiw0IEwxNiwxNiBMNCwxNiBMNCw0IEwxNiw0IFoiIGlkPSJSZWN0YW5nbGUtMy1Db3B5LTIiIHN0cm9rZS13aWR0aD0iOCIgZmlsbD0iI0Q4RDhEOCIgb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0yIiBvcGFjaXR5PSIwLjMiIHg9IjIuMzMyNjUzMDYiIHk9IjIuMyIgd2lkdGg9IjE1LjMzNDY5MzkiIGhlaWdodD0iMTUuNCI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMiIgb3BhY2l0eT0iMC4zIiB4PSIzLjM2NTMwNjEyIiB5PSIxLjMiIHdpZHRoPSIxMy4yNjkzODc4IiBoZWlnaHQ9IjE3LjQiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTIiIG9wYWNpdHk9IjAuMyIgeD0iMS4zIiB5PSIzLjQiIHdpZHRoPSIxNy40IiBoZWlnaHQ9IjEzLjIiPjwvcmVjdD4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBvcGFjaXR5PSIwLjMiIGN4PSIxMCIgY3k9IjEwIiByPSI4LjciPjwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0i57yW57uELTIiIG9wYWNpdHk9IjAuOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDIuNTAwMDAwKSIgZmlsbD0iIzMzMzMzMyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjM2Nzk3NzIzLDAuMDAxNjQyNjI4NDUgTDE1LjQzNjExNDgsMCBDMTYuMzI3NjMzNSwwIDE2LjY1MDkxOTgsMC4wOTI4MjU2MTExIDE2Ljk3Njg0NTcsMC4yNjcxMzI3MDQgQzE3LjMwMjc3MTYsMC40NDE0Mzk3OTYgMTcuNTU4NTYwMiwwLjY5NzIyODM3MSAxNy43MzI4NjczLDEuMDIzMTU0MyBDMTcuOTA3MTc0NCwxLjM0OTA4MDIyIDE4LDEuNjcyMzY2NDYgMTgsMi41NjM4ODUyIEwxOCw5LjQzNjExNDggQzE4LDEwLjMyNzYzMzUgMTcuOTA3MTc0NCwxMC42NTA5MTk4IDE3LjczMjg2NzMsMTAuOTc2ODQ1NyBDMTcuNTU4NTYwMiwxMS4zMDI3NzE2IDE3LjMwMjc3MTYsMTEuNTU4NTYwMiAxNi45NzY4NDU3LDExLjczMjg2NzMgQzE2LjY1MDkxOTgsMTEuOTA3MTc0NCAxNi4zMjc2MzM1LDEyIDE1LjQzNjExNDgsMTIgTDIuNTYzODg1MiwxMiBDMS42NzIzNjY0NiwxMiAxLjM0OTA4MDIyLDExLjkwNzE3NDQgMS4wMjMxNTQzLDExLjczMjg2NzMgQzAuNjk3MjI4MzcxLDExLjU1ODU2MDIgMC40NDE0Mzk3OTYsMTEuMzAyNzcxNiAwLjI2NzEzMjcwNCwxMC45NzY4NDU3IEMwLjEwNjIzMzg0OSwxMC42NzU5OTEgMC4wMTQ3NjMwMDIyLDEwLjM3NzM4NTUgMC4wMDE2NDI2Mjg0NSw5LjYzMjAyMjc3IEwwLDIuNTYzODg1MiBDMCwxLjY3MjM2NjQ2IDAuMDkyODI1NjExMSwxLjM0OTA4MDIyIDAuMjY3MTMyNzA0LDEuMDIzMTU0MyBDMC40NDE0Mzk3OTYsMC42OTcyMjgzNzEgMC42OTcyMjgzNzEsMC40NDE0Mzk3OTYgMS4wMjMxNTQzLDAuMjY3MTMyNzA0IEMxLjMyNDAwOSwwLjEwNjIzMzg0OSAxLjYyMjYxNDUsMC4wMTQ3NjMwMDIyIDIuMzY3OTc3MjMsMC4wMDE2NDI2Mjg0NSBaIE0yLjQxNTA5Mjk0LDEuNTAwNjA1MzcgTDIuMTU2MDk2ODksMS41MDY2MDE5OCBMMS45NzcyNDM3LDEuNTE5NzUyMDQgQzEuOTA0MDM4NjQsMS41MjgyNjYwMiAxLjg1MjMwNTI3LDEuNTM5ODAxMzMgMS44MDkxNzA3MywxLjU1NDg2NjE4IEwxLjczMDU1MjU4LDEuNTg5ODUyNSBDMS42NjYwMjkzNywxLjYyNDM1OTg5IDEuNjI0MzU5ODksMS42NjYwMjkzNyAxLjU4OTg1MjUsMS43MzA1NTI1OCBMMS41NTc5MjYzNiwxLjgwMDY1NDY1IEMxLjU0ODYwMzczLDEuODI1ODgxOCAxLjU0MDU2Mzk0LDEuODUzODk1NTggMS41MzM2OTcyLDEuODg3NDc2NTIgTDEuNTE2NTA2MzksMi4wMDc3MDEzOSBMMS41MDU2OTUzMiwyLjE3ODAxMjQ2IEwxLjUwMDYwNTM3LDIuNDE1MDkyOTQgTDEuNTAwNjA1MzcsOS41ODQ5MDcwNiBMMS41MDY2MDE5OCw5Ljg0MzkwMzExIEwxLjUxOTc1MjA0LDEwLjAyMjc1NjMgQzEuNTI4MjY2MDIsMTAuMDk1OTYxNCAxLjUzOTgwMTMzLDEwLjE0NzY5NDcgMS41NTQ4NjYxOCwxMC4xOTA4MjkzIEwxLjU4OTg1MjUsMTAuMjY5NDQ3NCBDMS42MjQzNTk4OSwxMC4zMzM5NzA2IDEuNjY2MDI5MzcsMTAuMzc1NjQwMSAxLjczMDU1MjU4LDEwLjQxMDE0NzUgTDEuODAwNjU0NjUsMTAuNDQyMDczNiBDMS44MjU4ODE4LDEwLjQ1MTM5NjMgMS44NTM4OTU1OCwxMC40NTk0MzYxIDEuODg3NDc2NTIsMTAuNDY2MzAyOCBMMi4wMDc3MDEzOSwxMC40ODM0OTM2IEwyLjE3ODAxMjQ2LDEwLjQ5NDMwNDcgTDIuNTYzODg1MiwxMC41IEwxNS41ODQ5MDcxLDEwLjQ5OTM5NDYgTDE1LjgyMTk4NzUsMTAuNDk0MzA0NyBMMTUuOTkyMjk4NiwxMC40ODM0OTM2IEwxNi4xMTI1MjM1LDEwLjQ2NjMwMjggQzE2LjE0NjEwNDQsMTAuNDU5NDM2MSAxNi4xNzQxMTgyLDEwLjQ1MTM5NjMgMTYuMTk5MzQ1MywxMC40NDIwNzM2IEwxNi4yNjk0NDc0LDEwLjQxMDE0NzUgQzE2LjMzMzk3MDYsMTAuMzc1NjQwMSAxNi4zNzU2NDAxLDEwLjMzMzk3MDYgMTYuNDEwMTQ3NSwxMC4yNjk0NDc0IEwxNi40NDIwNzM2LDEwLjE5OTM0NTMgQzE2LjQ1MTM5NjMsMTAuMTc0MTE4MiAxNi40NTk0MzYxLDEwLjE0NjEwNDQgMTYuNDY2MzAyOCwxMC4xMTI1MjM1IEwxNi40ODM0OTM2LDkuOTkyMjk4NjEgTDE2LjQ5NDMwNDcsOS44MjE5ODc1NCBMMTYuNSw5LjQzNjExNDggTDE2LjQ5OTM5NDYsMi40MTUwOTI5NCBMMTYuNDk0MzA0NywyLjE3ODAxMjQ2IEwxNi40ODM0OTM2LDIuMDA3NzAxMzkgTDE2LjQ2NjMwMjgsMS44ODc0NzY1MiBDMTYuNDU5NDM2MSwxLjg1Mzg5NTU4IDE2LjQ1MTM5NjMsMS44MjU4ODE4IDE2LjQ0MjA3MzYsMS44MDA2NTQ2NSBMMTYuNDEwMTQ3NSwxLjczMDU1MjU4IEMxNi4zNzU2NDAxLDEuNjY2MDI5MzcgMTYuMzMzOTcwNiwxLjYyNDM1OTg5IDE2LjI2OTQ0NzQsMS41ODk4NTI1IEwxNi4xOTkzNDUzLDEuNTU3OTI2MzYgQzE2LjE3NDExODIsMS41NDg2MDM3MyAxNi4xNDYxMDQ0LDEuNTQwNTYzOTQgMTYuMTEyNTIzNSwxLjUzMzY5NzIgTDE1Ljk5MjI5ODYsMS41MTY1MDYzOSBMMTUuODIxOTg3NSwxLjUwNTY5NTMyIEwxNS41ODQ5MDcxLDEuNTAwNjA1MzcgTDIuNDE1MDkyOTQsMS41MDA2MDUzNyBaIiBpZD0i55+p5b2iIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEwLjY5ODQ3MTQsNi41NzQ0MjA4OCBMOC4xNjQ0NzYxMyw4LjM2MjQ0OTk3IEM3LjY4MDIxMDgyLDguNzA0NTkzMjIgNyw4LjM2OTIzMTggNyw3Ljc4ODM2ODE5IEw3LDQuMjExNjMxODEgQzcsMy42MzA3NjgyIDcuNjgwMjEwODIsMy4yOTU0MDY3OCA4LjE2NDQ3NjEzLDMuNjM3NTUwMDMgTDEwLjY5ODQ3MTQsNS40MjU1NzkxMiBDMTEuMTAwNTA5NSw1LjcwOTM5ODY1IDExLjEwMDUwOTUsNi4yOTA2MDEzNSAxMC42OTg0NzE0LDYuNTc0NDIwODgiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMywxMy43NSBDMTMuNDE0MjEzNiwxMy43NSAxMy43NSwxNC4wODU3ODY0IDEzLjc1LDE0LjUgQzEzLjc1LDE0Ljg3OTY5NTggMTMuNDY3ODQ2MSwxNS4xOTM0OTEgMTMuMTAxNzcwNiwxNS4yNDMxNTM0IEwxMywxNS4yNSBMNSwxNS4yNSBDNC41ODU3ODY0NCwxNS4yNSA0LjI1LDE0LjkxNDIxMzYgNC4yNSwxNC41IEM0LjI1LDE0LjEyMDMwNDIgNC41MzIxNTM4OCwxMy44MDY1MDkgNC44OTgyMjk0NCwxMy43NTY4NDY2IEw1LDEzLjc1IEwxMywxMy43NSBaIiBpZD0i6Lev5b6EIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="></img>
                    <a className="sideTop">
                        Anime
                    </a>
                </li>
                <li className="sidelist">
                    <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SUNPTi8yMC/kvqflr7wvVHJlbmdpbmdf5pyq6YCJ5LitPC90aXRsZT4KICAgIDxnIGlkPSJJQ09OLzIwL+S+p+WvvC9UcmVuZ2luZ1/mnKrpgInkuK0iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiMxQTFBMUEiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgIDxnIGlkPSLljaDkvY0iIG9wYWNpdHk9IjAiIHN0cm9rZT0iIzk3OTc5NyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiw0IEwxNiwxNiBMNCwxNiBMNCw0IEwxNiw0IFoiIGlkPSJSZWN0YW5nbGUtMy1Db3B5LTIiIHN0cm9rZS13aWR0aD0iOCIgZmlsbD0iI0Q4RDhEOCIgb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0yIiBvcGFjaXR5PSIwLjMiIHg9IjIuMzMyNjUzMDYiIHk9IjIuMyIgd2lkdGg9IjE1LjMzNDY5MzkiIGhlaWdodD0iMTUuNCI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMiIgb3BhY2l0eT0iMC4zIiB4PSIzLjM2NTMwNjEyIiB5PSIxLjMiIHdpZHRoPSIxMy4yNjkzODc4IiBoZWlnaHQ9IjE3LjQiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTIiIG9wYWNpdHk9IjAuMyIgeD0iMS4zIiB5PSIzLjQiIHdpZHRoPSIxNy40IiBoZWlnaHQ9IjEzLjIiPjwvcmVjdD4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBvcGFjaXR5PSIwLjMiIGN4PSIxMCIgY3k9IjEwIiByPSI4LjciPjwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJNNi45NzUzNjUxOSwwLjc3MDYzMjQyMyBDNi45NzUzNjUxOSwwLjE1ODA0NTQ2NiA3LjY1NDk1ODU4LC0wLjE5NDc4NTE4NyA4LjE1ODM2NjM1LDAuMTEzNTg3MzkzIEw4LjI0NTE5OTkxLDAuMTc0OTUxNDk2IEw5LjA2OTc1NDI4LDAuODI2MDA0MTM2IEw5LjU3MjA2MDk0LDEuMjMzMTI4NzggQzkuODkzMjk4ODYsMS41MDA1ODg1OSAxMC4xODM4OTA4LDEuNzU3NjIzMzMgMTAuNDY2NDM4NiwyLjAyNzQ0NDc5IEMxMS4wNzUwMDQ1LDIuNjA4NjAwMDQgMTEuNjAxNzM4OCwzLjIwOTc5MjE1IDEyLjA1MDYwODQsMy44NjAwODA2MyBDMTIuNjQ2MDc5OSw0LjcyMjgxODczIDEzLjI2MzAwNSw2LjEyMDQwODA4IDEzLjY3MTI2MzQsNy4yODE5MzUwMSBMMTMuNzk1NTYwOCw3LjY1MDEzMDk3IEwxMy45MjQyMDkxLDcuNDY1MDY3NTYgQzE0LjExNTUwMjIsNy4xNjU5NDQ3NyAxNC4yNjI3NDc4LDYuODI3MzgzNzcgMTQuMzU3NDkzOCw2LjQ0MDkwMTYxIEwxNC40MDc5NzM3LDYuMjAzMTkzOTEgTDE0LjQ0NTQ0OCw1Ljk1MzU3Nzk1IEMxNC41MzQyODgzLDUuMjE2ODgwODQgMTUuNTIyMjM2Myw1LjAxOTI4NTA4IDE1Ljg5MzU3MSw1LjY2Mzk0NDMyIEwxNi4wMDUxLDUuODU4NDI2ODggTDE2LjI4MTcwNDIsNi4zNTc2MTQ4NyBMMTYuNDMxMDk3NCw2LjY1MDg3NTQzIEMxNi40OTMyNDIzLDYuNzc4NzMxNTggMTYuNTUwNzY5Myw2LjkwNTcwMzAzIDE2LjYwNzg4NDksNy4wNDE0ODc3OCBMMTYuNjkzNzc1Niw3LjI1Mjk4NzEgTDE2LjgyODM1NTgsNy42MTA5MzQxOSBMMTYuOTc5MjkzNiw4LjAzOTUzOTQ0IEwxNy4xNTcyMzY2LDguNTYzMzUwODQgQzE3LjY0MDMwNSw5Ljk5OTI1MTA5IDE3Ljc3NzY4MjgsMTAuOTk1NTA1IDE3Ljc3NzY4MjgsMTIuMzUzNTI2NiBDMTcuNzc3NjgyOCwxNi42MTU2MTgzIDE0LjMwMTU5NDQsMjAgMTAuMDAwMDAxNywyMCBDNS42NzI5Mjc5MywyMCAyLjIyMjIyNzIyLDE2Ljc0MDc0MjEgMi4yMjIyMjcyMiwxMi41MDEyMDgxIEMyLjIyMjIyNzIyLDExLjA3ODAxNiAyLjQ0NDI2ODg2LDkuODYzOTAzOTMgMy4wNTAyOTQwMSw4Ljg4OTM5NzU3IEMzLjMwMTQzNzMsOC40ODU1ODk3MyAzLjUyMjY0MDc2LDguMTc2MDkxNjIgMy43NjMwNDY1Miw3Ljg4NjkyMDg2IEwzLjg4NTQ2Nzg3LDcuNzQzMTQ0NDUgTDQuMDE2OTYxODMsNy41OTUzMDIzMiBMNC4yMTQ1MjM4Niw3LjM4MjY0NzYyIEw1LjM4MzE1MjQxLDYuMTA4MDU3MDMgTDUuNTAzMjg4NjUsNS45NjE4Njk3MiBMNS42MTk1OTk0Niw1LjgwMjk4Nzk1IEw1LjcyOTg3MzcyLDUuNjMzODMxMDkgTDUuODU0ODQ4NSw1LjQyNDMxODAyIEw2LjA4NjQ1NDE4LDUuMDA1ODM1NjggQzYuNTcxODIxMTYsNC4xMDMwOTY5MSA2Ljk3NTM2NTE5LDIuMTQ3MTQ5NjggNi45NzUzNjUxOSwwLjc3MDYzMjQyMyBaIE04LjM3NywyLjE5NSBMOC4zNTAzNTk3OCwyLjQwNjkwNzk0IEM4LjE4ODM3MDk2LDMuNTUzNDUxNjkgNy44ODE0MTcyNCw0LjcyNzIyOSA3LjUwMzYwNjQyLDUuNTI0NDA3NjQgTDcuMzk4ODY1OTksNS43MzIxNzk0NCBMNy4xNDMwNzIxNyw2LjE5Mjc0NDg1IEw2Ljk4NjQ0Mzk4LDYuNDUyOTk2MDMgTDYuODI5OTQyMTUsNi42ODkwMzAwMyBMNi42NjIxNjg4LDYuOTE0MjMzNTEgTDYuNDg4NzczOTMsNy4xMjE3NjM2MiBMNS4zMTM0NjQyNSw4LjQwMzU5MzI2IEw1LjEyODQ0ODcyLDguNjAyNTc0MzIgTDQuOTE2NDk1NTcsOC44NDU4NTUzMSBDNC43MTkwOTI3OSw5LjA4MzMwMDE3IDQuNTM3NDA2ODcsOS4zMzg1MjM1IDQuMzI0MDc0OTEsOS42ODE1MzUzMiBDMy45MTkwOTg4MSwxMC4zMzI3NDg5IDMuNzIyMjI3MjIsMTEuMjM3NTAwMyAzLjcyMjIyNzIyLDEyLjUwMTIwODEgQzMuNzIyMjI3MjIsMTUuODc0MTc2NiA2LjQ2Mjg3MTk3LDE4LjUgMTAuMDAwMDAxNywxOC41IEMxMy40OTE0NjcxLDE4LjUgMTYuMjc3NjgyOCwxNS43Njg5NzM3IDE2LjI3NzY4MjgsMTIuMzUzNTI2NiBDMTYuMjc3NjgyOCwxMS4yMTc0OTc5IDE2LjE3MTU0NiwxMC40MzM1MzMxIDE1Ljg1MTY0ODUsOS40MDAzMDExMyBMMTUuNzM2OTUxMyw5LjA0NTgzMzQ4IEwxNS41NjQ0NjE3LDguNTM3Nzg3MTkgTDE1LjQyNDMxMzksOC4xMzg4MjI4OCBMMTUuMzYsNy45NjkgTDE1LjMwNzg0NDQsOC4wNjk4MTAxNSBMMTUuMTU1ODUyMiw4LjMyMTI1NCBMMTMuMjg1NjkyOSwxMS4wMTE1MTk1IEwxMi4zNTMzNDM2LDguMDYzOTQxNjQgQzExLjkzOTcyMTUsNi44MTUyMzQ2OCAxMS4zMTYxMjM2LDUuNDM2NTgwNjQgMTAuODE2MTM5Niw0LjcxMjE4Nzg1IEMxMC40MzgxOTQxLDQuMTY0NjQ4OTEgOS45ODMyOTQzLDMuNjQwMTU4OTkgOS40MzA0OTA0OCwzLjExMjI1NDE5IEM5LjI2MzA5NjQyLDIuOTUyMzk5NzcgOS4wOTAwMTc1NCwyLjc5NTA1ODg4IDguOTA3OTEzMDIsMi42MzY4NDEzNCBMOC42Mjc1Njk0MSwyLjM5ODQzMzc4IEw4LjM3NywyLjE5NSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMzMzMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNNi43NDk2MDQ5MywxMi4yOTMwMzMgQzcuMTA3NTE0NzUsMTIuMTY2MjY3OCA3LjQ5NzUwNTEzLDEyLjMyNzQ2ODcgNy42NjY1MzYwNywxMi42NTU5NTk1IEw3LjcwNjk2Njk4LDEyLjc0OTYwNDkgQzguMDIyNDY5MjYsMTMuNjQwMzk2IDguODY3ODc0MzUsMTQuMjQ4MTcyIDkuODI4NjQ3NTIsMTQuMjQ4MTcyIEMxMC4yNDI4NjExLDE0LjI0ODE3MiAxMC41Nzg2NDc1LDE0LjU4Mzk1ODUgMTAuNTc4NjQ3NSwxNC45OTgxNzIgQzEwLjU3ODY0NzUsMTUuNDEyMzg1NiAxMC4yNDI4NjExLDE1Ljc0ODE3MiA5LjgyODY0NzUyLDE1Ljc0ODE3MiBDOC4yMjc1NzcwNiwxNS43NDgxNzIgNi44MTkwNTE2NCwxNC43MzU1NTkyIDYuMjkzMDMzMDIsMTMuMjUwMzk1MSBDNi4xNTQ3NDM2NCwxMi44NTk5NDggNi4zNTkxNTc4NSwxMi40MzEzMjI0IDYuNzQ5NjA0OTMsMTIuMjkzMDMzIFoiIGlkPSLot6/lvoQiIGZpbGw9IiMzMzMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="></img>
                    <a className="sideTop">
                        Trending
                    </a>
                </li>
                <li className="sidelist">
                    <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SUNPTi8yMC/kvqflr7wvQ2F0ZWdvcnlf5pyq6YCJ5LitPC90aXRsZT4KICAgIDxnIGlkPSJJQ09OLzIwL+S+p+WvvC9DYXRlZ29yeV/mnKrpgInkuK0iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLljaDkvY0iIG9wYWNpdHk9IjAiIHN0cm9rZT0iIzk3OTc5NyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiw0IEwxNiwxNiBMNCwxNiBMNCw0IEwxNiw0IFoiIGlkPSJSZWN0YW5nbGUtMy1Db3B5LTIiIHN0cm9rZS13aWR0aD0iOCIgZmlsbD0iI0Q4RDhEOCIgb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0yIiBvcGFjaXR5PSIwLjMiIHg9IjIuMzMyNjUzMDYiIHk9IjIuMyIgd2lkdGg9IjE1LjMzNDY5MzkiIGhlaWdodD0iMTUuNCI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMiIgb3BhY2l0eT0iMC4zIiB4PSIzLjM2NTMwNjEyIiB5PSIxLjMiIHdpZHRoPSIxMy4yNjkzODc4IiBoZWlnaHQ9IjE3LjQiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTIiIG9wYWNpdHk9IjAuMyIgeD0iMS4zIiB5PSIzLjQiIHdpZHRoPSIxNy40IiBoZWlnaHQ9IjEzLjIiPjwvcmVjdD4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBvcGFjaXR5PSIwLjMiIGN4PSIxMCIgY3k9IjEwIiByPSI4LjciPjwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJNMTUuODgyMTQ5NywyLjAwMjAxNDY5IEMxNi44ODM3NzI3LDIuMDAyMDE0NjkgMTcuNTQxMTY2NiwyLjc0NDc4MTg2IDE3LjU0MTE2NjYsMy42NjEwMzE2IEMxNy41NDExNjY2LDQuMDAzMTQwNTYgMTcuNDM1NDUxNCw0LjMzNTQyMDYyIDE3LjIyNDIxMTcsNC42MzEzMTY3NiBMMTcuMTA5Nzk5LDQuNzc2MTA5OSBMMTIuNDk0NDgyMiw5LjU3NzM1NTEzIEMxMi4yMDc0MjgxLDkuODc1OTczMjcgMTEuNzMyNjQ2OSw5Ljg4NTM0Nzc1IDExLjQzNDAyODcsOS41OTgyOTM2MSBDMTEuMTYyNTU3Nyw5LjMzNzMzNTMgMTEuMTMwMTMxLDguOTIxMjMwNjYgMTEuMzQyMTQ2OCw4LjYyMzM3NTczIEwxMS40MTMwOTAzLDguNTM3ODQwMTMgTDE2LjAwMjMyMDQsMy43NjUxNzI3NiBDMTYuMDI3Mzc0NywzLjczNjI2MjAzIDE2LjA0MTE2NjYsMy42OTkyODc5NyAxNi4wNDExNjY2LDMuNjYxMDMxNiBDMTYuMDQxMTY2NiwzLjU5MDc3MzUxIDE1Ljk5NTYwMjIsMy41MzExNTc1NCAxNS45MzI0MTEzLDMuNTEwMTIxNDcgTDE1Ljg4MjE0OTcsMy41MDIwMTQ2OSBMMy45MDkwMzExOSwzLjUwMjAxNDY5IEMzLjg3MDc3NDgyLDMuNTAyMDE0NjkgMy44MzM4MDA3NSwzLjUxNTgwNjU3IDMuODA0ODkwMDIsMy41NDA4NjA5IEMzLjc1MTc5NTI3LDMuNTg2ODczMzYgMy43MzY1ODMyNSwzLjY2MDM0OTY3IDMuNzQ4NzEzODMsMy43MDcyNDg0OCBMMy43NjI3NzM4MiwzLjczNjU5NDkgTDguNDA0MTc3MjUsOC41NjY0MTc5OSBDOC43NjM4MzM2MSw4Ljk4MTQzMzExIDguOTc5NzgwNSw5LjQ5OTMzNjgxIDkuMDIzMzI4NSwxMC4wNDMyMTY4IEw5LjAzMTUyMTc2LDEwLjI0ODIzOTIgTDkuMDMxNTIxNzYsMTYuMjQ3Mzg3NSBDOS4wMzE1MjE3NiwxNi4yOTUzMjI5IDkuMDUzMDQ2NDMsMTYuMzM5NzY0NSA5LjA4ODY0NzU2LDE2LjM2OTQ4MDkgTDkuMTI4NjY0OTgsMTYuMzkzODczIEwxMC41Mzg3Njg1LDE2Ljk4OTQ4MzMgQzEwLjU1ODM0ODMsMTYuOTk3NzUzNiAxMC41NzkzODc0LDE3LjAwMjAxNDcgMTAuNjAwNjQyMiwxNy4wMDIwMTQ3IEMxMS4wMTQ4NTU3LDE3LjAwMjAxNDcgMTEuMzUwNjQyMiwxNy4zMzc4MDExIDExLjM1MDY0MjIsMTcuNzUyMDE0NyBDMTEuMzUwNjQyMiwxOC4xNjYyMjgyIDExLjAxNDg1NTcsMTguNTAyMDE0NyAxMC42MDA2NDIyLDE4LjUwMjAxNDcgQzEwLjQzNDMyOTQsMTguNTAyMDE0NyAxMC4yNjkyODI0LDE4LjQ3NzAwODQgMTAuMTEwOTc0OCwxOC40MjgxMDQ1IEw5Ljk1NTExNjQyLDE4LjM3MTI3NTggTDguNTQ1MDEyOTEsMTcuNzc1NjY1NCBDNy45NzgwMDEyLDE3LjUzNjE2NjcgNy41OTQyMTM5MiwxNy4wMDQ3ODgyIDcuNTM4NTI0ODIsMTYuMzk5OTkwMSBMNy41MzE1MjE3NiwxNi4yNDczODc1IEw3LjUzMTUyMTc2LDEwLjI0ODIzOTIgQzcuNTMxNTIxNzYsMTAuMDM0MTE1OCA3LjQ2NzE5MzM4LDkuODI1OTczMzMgNy4zNjM0NjQ1Niw5LjY2NjcwNjc5IEw3LjI5NjY5ODY0LDkuNTc3MzU1MTMgTDIuNjU1Mjk1MjEsNC43NDc1MzIwNSBDMi4wNTUyMzc1OCw0LjA1NTExMjc4IDIuMTMwMTExNDgsMy4wMDczNTMyNSAyLjgyMjUzMDc0LDIuNDA3Mjk1NjIgQzMuMDgxMDY1OTcsMi4xODMyNDYzNSAzLjQwMTQwNjkyLDIuMDQ1NTI0MTIgMy43MzkwMDIwNCwyLjAxMDc0NzM1IEwzLjkwOTAzMTE5LDIuMDAyMDE0NjkgTDE1Ljg4MjE0OTcsMi4wMDIwMTQ2OSBaIE0xMy41MzYwOTg5LDE1LjE4Njk3NjYgQzEzLjk1MDMxMjUsMTUuMTg2OTc2NiAxNC4yODYwOTg5LDE1LjUyMjc2MyAxNC4yODYwOTg5LDE1LjkzNjk3NjYgQzE0LjI4NjA5ODksMTYuMzE2NjcyMyAxNC4wMDM5NDUxLDE2LjYzMDQ2NzUgMTMuNjM3ODY5NSwxNi42ODAxMyBMMTMuNTM2MDk4OSwxNi42ODY5NzY2IEwxMi4wMzYwOTg5LDE2LjY4Njk3NjYgQzExLjYyMTg4NTQsMTYuNjg2OTc2NiAxMS4yODYwOTg5LDE2LjM1MTE5MDEgMTEuMjg2MDk4OSwxNS45MzY5NzY2IEMxMS4yODYwOTg5LDE1LjU1NzI4MDggMTEuNTY4MjUyOCwxNS4yNDM0ODU2IDExLjkzNDMyODQsMTUuMTkzODIzMiBMMTIuMDM2MDk4OSwxNS4xODY5NzY2IEwxMy41MzYwOTg5LDE1LjE4Njk3NjYgWiBNMTQuMDM2MDk4OSwxMi45MTQ0MzQzIEMxNC40NTAzMTI1LDEyLjkxNDQzNDMgMTQuNzg2MDk4OSwxMy4yNTAyMjA3IDE0Ljc4NjA5ODksMTMuNjY0NDM0MyBDMTQuNzg2MDk4OSwxNC4wNDQxMyAxNC41MDM5NDUxLDE0LjM1NzkyNTIgMTQuMTM3ODY5NSwxNC40MDc1ODc3IEwxNC4wMzYwOTg5LDE0LjQxNDQzNDMgTDEyLjAzNjA5ODksMTQuNDE0NDM0MyBDMTEuNjIxODg1NCwxNC40MTQ0MzQzIDExLjI4NjA5ODksMTQuMDc4NjQ3OCAxMS4yODYwOTg5LDEzLjY2NDQzNDMgQzExLjI4NjA5ODksMTMuMjg0NzM4NSAxMS41NjgyNTI4LDEyLjk3MDk0MzMgMTEuOTM0MzI4NCwxMi45MjEyODA5IEwxMi4wMzYwOTg5LDEyLjkxNDQzNDMgTDE0LjAzNjA5ODksMTIuOTE0NDM0MyBaIE0xNS4wMzYwOTg5LDEwLjY0MTg5MiBDMTUuNDUwMzEyNSwxMC42NDE4OTIgMTUuNzg2MDk4OSwxMC45Nzc2Nzg0IDE1Ljc4NjA5ODksMTEuMzkxODkyIEMxNS43ODYwOTg5LDExLjc3MTU4NzggMTUuNTAzOTQ1MSwxMi4wODUzODMgMTUuMTM3ODY5NSwxMi4xMzUwNDU0IEwxNS4wMzYwOTg5LDEyLjE0MTg5MiBMMTIuMDM2MDk4OSwxMi4xNDE4OTIgQzExLjYyMTg4NTQsMTIuMTQxODkyIDExLjI4NjA5ODksMTEuODA2MTA1NiAxMS4yODYwOTg5LDExLjM5MTg5MiBDMTEuMjg2MDk4OSwxMS4wMTIxOTYyIDExLjU2ODI1MjgsMTAuNjk4NDAxIDExLjkzNDMyODQsMTAuNjQ4NzM4NiBMMTIuMDM2MDk4OSwxMC42NDE4OTIgTDE1LjAzNjA5ODksMTAuNjQxODkyIFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGw9IiMzMzMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="></img>
                    <a className="sideTop">Category
                    </a>
                </li>
                <li className="sidelist">
                    <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SUNPTi8yMC/kvqflr7wvTGl2ZV/mnKrpgInkuK1AMXg8L3RpdGxlPgogICAgPGcgaWQ9IklDT04vMjAv5L6n5a+8L0xpdmVf5pyq6YCJ5LitIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTGl2ZS1NYW5hZ2VtZW505aSH5Lu9LTIiPgogICAgICAgICAgICA8ZyBpZD0iTGl2ZS1NYW5hZ2VtZW50Ij4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLnn6nlvaIiIHBvaW50cz0iLTEuNTg0ODQzMzdlLTEzIDAgMjAgMCAyMCAyMCAtMS41ODQ4NDMzN2UtMTMgMjAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHg9IjIiIHk9IjUuNSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPGxpbmUgeDE9IjcuNSIgeTE9IjUuNSIgeDI9IjUuNSIgeTI9IjIuNSIgaWQ9IuebtOe6vyIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICA8bGluZSB4MT0iMTQuNSIgeTE9IjUuNSIgeDI9IjEyLjUiIHkyPSIyLjUiIGlkPSLnm7Tnur8iIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuNTAwMDAwLCA0LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTMuNTAwMDAwLCAtNC4wMDAwMDApICI+PC9saW5lPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCA3LjUwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0Q4RDhEOCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjgiIGhlaWdodD0iOCI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iIzMzMzMzMyIgeD0iMy4yNSIgeT0iMSIgd2lkdGg9IjEuNSIgaGVpZ2h0PSI2IiByeD0iMC43NSI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9ouWkh+S7vS0xMiIgZmlsbD0iIzMzMzMzMyIgeD0iMC41ODMzMzMzMzMiIHk9IjQiIHdpZHRoPSIxLjUiIGhlaWdodD0iMyIgcng9IjAuNzUiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70tMTMiIGZpbGw9IiMzMzMzMzMiIHg9IjUuOTE2NjY2NjciIHk9IjMiIHdpZHRoPSIxLjUiIGhlaWdodD0iNCIgcng9IjAuNzUiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></img>
                    <a className="sideTop">
                        LIVE
                    </a>
                </li>
            </ul>

            <div className="followings">
                <p>Log in to view your "Followed" content. </p>
                <button> Log in</button>
            </div>

            <div className="moredetails">
                <a>About us</a>
                <a>Contact us</a>
                <a>Get App</a>
                <a>Terms of Service</a>
                <a>Punishment Rules for Video Violations</a>
                <a>Punishment RUles for Account Violations</a>
                <a>Privacy Policy</a>
                <a>Infrigement Complaint</a>
                <span>© 2024 BiliBili</span>
                <span>provided by
                    <img style={{height: "15px", width: "80px", marginLeft: "5px"}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzA2IiBoZWlnaHQ9IjEyOSIgdmlld0JveD0iMCAwIDcwNiAxMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00NDIuNDY4IDM3SDQ0Mi4zM0M0MjMuODM5IDM3LjA0MTkgNDAxLjczMiA0NC45NjQ3IDQwMS4wMTUgODIuMzI5QzQwMC43MzkgOTYuNjY1NCA0MDQuMzk1IDEwNy45OTggNDExLjg2MSAxMTYuMDE4QzQxOS4xMzMgMTIzLjgxNSA0MjkuMzg2IDEyNy43OTggNDQyLjMzIDEyNy44MjZINDQyLjQ2OEM0NTUuNDEyIDEyNy43OTggNDY1LjY1MSAxMjMuODE1IDQ3Mi45MzcgMTE2LjAxOEM0ODAuNDE2IDEwNy45OTggNDg0LjA1OSA5Ni42NjU0IDQ4My43ODMgODIuMzI5QzQ4My4wNTIgNDQuOTY0NyA0NjAuOTQ1IDM3LjA0MTkgNDQyLjQ2OCAzN1pNNDU4LjM1MSAxMDAuODAxQzQ1NC45NTYgMTA0LjQzNSA0NDkuNjAyIDEwNi4yOTMgNDQyLjM5OSAxMDYuMzA3QzQzNS4xOTYgMTA2LjI5MyA0MjkuODQxIDEwNC40MzUgNDI2LjQzMyAxMDAuODAxQzQyMi44NzMgOTYuOTcyOCA0MjEuMTM0IDkwLjg5NDUgNDIxLjMgODIuNjkyMkM0MjEuNjg2IDYyLjU3MDkgNDI5LjY2MiA1OC41MTg3IDQ0Mi4zOTkgNTguNTA0N0M0NTUuMTIyIDU4LjUzMjYgNDYzLjA5OCA2Mi41ODQ5IDQ2My40ODQgODIuNjkyMkM0NjMuNjM2IDkwLjg5NDUgNDYxLjkxMSA5Ni45NzI4IDQ1OC4zNTEgMTAwLjgwMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik01MzIuNDY4IDM3SDUzMi4zM0M1MTMuODM5IDM3LjA0MTkgNDkxLjczMiA0NC45NjQ3IDQ5MS4wMTUgODIuMzI5QzQ5MC43MzkgOTYuNjY1NCA0OTQuMzk1IDEwNy45OTggNTAxLjg2MSAxMTYuMDE4QzUwOS4xMzMgMTIzLjgxNSA1MTkuMzg2IDEyNy43OTggNTMyLjMzIDEyNy44MjZINTMyLjQ2OEM1NDUuNDEyIDEyNy43OTggNTU1LjY1MSAxMjMuODE1IDU2Mi45MzcgMTE2LjAxOEM1NzAuNDE2IDEwNy45OTggNTc0LjA1OSA5Ni42NjU0IDU3My43ODMgODIuMzI5QzU3My4wNTIgNDQuOTY0NyA1NTAuOTQ1IDM3LjA0MTkgNTMyLjQ2OCAzN1pNNTQ4LjM1MSAxMDAuODAxQzU0NC45NTYgMTA0LjQzNSA1MzkuNjAyIDEwNi4yOTMgNTMyLjM5OSAxMDYuMzA3QzUyNS4xOTYgMTA2LjI5MyA1MTkuODQxIDEwNC40MzUgNTE2LjQzMyAxMDAuODAxQzUxMi44NzMgOTYuOTcyOCA1MTEuMTM0IDkwLjg5NDUgNTExLjMgODIuNjkyMkM1MTEuNjg2IDYyLjU3MDkgNTE5LjY2MiA1OC41MTg3IDUzMi4zOTkgNTguNTA0N0M1NDUuMTIyIDU4LjUzMjYgNTUzLjA5OCA2Mi41ODQ5IDU1My40ODQgODIuNjkyMkM1NTMuNjM2IDkwLjg5NDUgNTUxLjkxMSA5Ni45NzI4IDU0OC4zNTEgMTAwLjgwMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNjYuMTExIDQxLjEwODFIMTUzLjgwMkMxNTIuNjU2IDQxLjEwODEgMTUxLjYyMSA0MS41NDEzIDE1MC44NzYgNDIuMjI2QzE0NC4xMjggMzguMjk5NSAxMzYuMzg3IDM3LjAxNCAxMjkuMjI1IDM3SDEyOS4wODdDMTExLjE0OCAzNy4wNDE5IDg5LjcwMzUgNDQuOTY0NyA4OS4wMTM1IDgyLjMyOUM4OC43NTE0IDk2LjY2NTQgOTIuMjk4IDEwNy45OTggOTkuNTI4OCAxMTYuMDE4QzEwNi41OCAxMjMuODE1IDExNi41MyAxMjcuNzk4IDEyOS4wODcgMTI3LjgyNkgxMjkuMjI1QzEzNy4wNjMgMTI3LjgxMiAxNDMuODggMTI2LjI0NyAxNDkuNjIgMTIzLjE4NlYxMjMuODAxQzE0OS42MiAxMjUuOTgxIDE1MS40OTcgMTI3Ljc0MiAxNTMuODE2IDEyNy43NDJIMTY2LjEyNUMxNjguNDQzIDEyNy43NDIgMTcwLjMyIDEyNS45NjcgMTcwLjMyIDEyMy44MDFWNDUuMDQ4NUMxNzAuMzA2IDQyLjg2ODcgMTY4LjQyOSA0MS4xMDgxIDE2Ni4xMTEgNDEuMTA4MVpNMTQ0LjYxMSAxMDAuODAxQzE0MS4zMjcgMTA0LjQzNSAxMzYuMTI1IDEwNi4yOTMgMTI5LjE0MiAxMDYuMzA3QzEyMi4xNiAxMDYuMjkzIDExNi45NTcgMTA0LjQzNSAxMTMuNjU5IDEwMC44MDFDMTEwLjE5NiA5Ni45NzI4IDEwOC41MTIgOTAuODk0NSAxMDguNjc4IDgyLjY5MjJDMTA5LjA2NCA2Mi41NzA5IDExNi43OTIgNTguNTE4NyAxMjkuMTQyIDU4LjUwNDdDMTQxLjQ3OSA1OC41MzI2IDE0OS4yMDYgNjIuNTg0OSAxNDkuNTkzIDgyLjY5MjJDMTQ5Ljc0NSA5MC44OTQ1IDE0OC4wNjEgOTYuOTcyOCAxNDQuNjExIDEwMC44MDFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxNi42ODQgMEgzMjkuNjNDMzMyLjEzNSAwIDMzNC4xNTcgMi4yOTYxMiAzMzQuMTU3IDUuMTQwNTZWNDEuMzMwOEMzNDAuMzAzIDM4LjM5MDIgMzQ3LjA4MiAzNy4zODU3IDM1My40MDggMzcuMzczM0gzNTMuNTQ2QzM3MS40ODYgMzcuNDE1MiAzOTIuOTMgNDUuMzM3OSAzOTMuNjIgODIuNzAyMUMzOTMuODgyIDk3LjAzODYgMzkwLjMzNSAxMDguMzcxIDM4My4xMDQgMTE2LjM5MUMzNzYuMDUzIDEyNC4xODggMzY2LjEwNCAxMjguMTcxIDM1My41NDYgMTI4LjE5OUgzNTMuNDA4QzM0Ni4wMjggMTI4LjE4NiAzMzkuNTUzIDEyNi43OTcgMzM0LjAyOSAxMjQuMDhDMzMzLjU2NSAxMjYuMjUzIDMzMS44ODkgMTI3Ljg4MSAzMjkuODU1IDEyNy45OTRDMzI5LjUyNCAxMjguMDczIDMyOS4xNzYgMTI4LjExNSAzMjguODE4IDEyOC4xMTVIMzE2LjUwOUMzMTQuMjAzIDEyOC4xMTUgMzEyLjMzNSAxMjYuMzYgMzEyLjMxNCAxMjQuMjFDMzEyLjIxMSAxMjMuNzggMzEyLjE1NyAxMjMuMzI3IDMxMi4xNTcgMTIyLjg1OVY3Ny44MDM0TDMxMiAzMS41QzMxMi4wMDIgMzEuMTM1MiAzMTIuMDU3IDMwLjc4MjIgMzEyLjE1NyAzMC40NDcyVjUuMTQwNTZDMzEyLjE1NyAyLjI5NjEyIDMxNC4xNzkgMCAzMTYuNjg0IDBaTTM1My40OTEgMTA2LjY4QzM0Ni41MDkgMTA2LjY2NiAzNDEuMzA2IDEwNC44MDggMzM4LjAyMiAxMDEuMTc1QzMzNC41NzIgOTcuMzQ2IDMzMi44ODkgOTEuMjY3NyAzMzMuMDQgODMuMDY1NEMzMzMuNDI3IDYyLjk1OCAzNDEuMTU0IDU4LjkwNiAzNTMuNDkxIDU4Ljg3ODFDMzY1Ljg0MiA1OC44OTIgMzczLjU2OSA2Mi45NDQxIDM3My45NTYgODMuMDY1NEMzNzQuMTIxIDkxLjI2NzcgMzcyLjQzOCA5Ny4zNDYgMzY4Ljk3NCAxMDEuMTc1QzM2NS42NzYgMTA0LjgwOCAzNjAuNDc0IDEwNi42NjYgMzUzLjQ5MSAxMDYuNjhaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjk0LjExMSA0MS4xMDgxSDI4MS44MDJDMjgwLjY1NiA0MS4xMDgxIDI3OS42MjEgNDEuNTQxMyAyNzguODc2IDQyLjIyNkMyNzIuMTI4IDM4LjI5OTUgMjY0LjM4NyAzNy4wMTQgMjU3LjIyNSAzN0gyNTcuMDg3QzIzOS4xNDggMzcuMDQxOSAyMTcuNzA0IDQ0Ljk2NDcgMjE3LjAxNCA4Mi4zMjlDMjE2Ljc1MSA5Ni42NjU0IDIyMC4yOTggMTA3Ljk5OCAyMjcuNTI5IDExNi4wMThDMjM0LjU4IDEyMy44MTUgMjQ0LjUzIDEyNy43OTggMjU3LjA4NyAxMjcuODI2SDI1Ny4yMjVDMjY1LjA2MyAxMjcuODEyIDI3MS44OCAxMjYuMjQ3IDI3Ny42MiAxMjMuMTg2VjEyMy44MDFDMjc3LjYyIDEyNS45ODEgMjc5LjQ5NyAxMjcuNzQyIDI4MS44MTYgMTI3Ljc0MkgyOTQuMTI1QzI5Ni40NDMgMTI3Ljc0MiAyOTguMzIgMTI1Ljk2NyAyOTguMzIgMTIzLjgwMVY0NS4wNDg1QzI5OC4zMDYgNDIuODY4NyAyOTYuNDI5IDQxLjEwODEgMjk0LjExMSA0MS4xMDgxWk0yNzIuNjExIDEwMC44MDFDMjY5LjMyNyAxMDQuNDM1IDI2NC4xMjUgMTA2LjI5MyAyNTcuMTQyIDEwNi4zMDdDMjUwLjE2IDEwNi4yOTMgMjQ0Ljk1NyAxMDQuNDM1IDI0MS42NTkgMTAwLjgwMUMyMzguMTk2IDk2Ljk3MjggMjM2LjUxMiA5MC44OTQ1IDIzNi42NzggODIuNjkyMkMyMzcuMDY0IDYyLjU3MDkgMjQ0Ljc5MiA1OC41MTg3IDI1Ny4xNDIgNTguNTA0N0MyNjkuNDc5IDU4LjUzMjYgMjc3LjIwNiA2Mi41ODQ5IDI3Ny41OTMgODIuNjkyMkMyNzcuNzQ1IDkwLjg5NDUgMjc2LjA2MSA5Ni45NzI4IDI3Mi42MTEgMTAwLjgwMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMDAuNDczIDBIMTg3LjUyN0MxODUuMDIyIDAgMTgzIDIuMjk2MTIgMTgzIDUuMTQwNTZWMTIyLjg1OUMxODMgMTI1LjcwNCAxODUuMDIyIDEyOCAxODcuNTI3IDEyOEgyMDAuNDczQzIwMi45NzggMTI4IDIwNSAxMjUuNzA0IDIwNSAxMjIuODU5VjUuMTQwNTZDMjA1IDIuMjk2MTIgMjAyLjk3OCAwIDIwMC40NzMgMFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC42ODM1MSAwSDE3LjYzQzIwLjEzNDggMCAyMi4xNTY4IDIuMjk2MTIgMjIuMTU2OCA1LjE0MDU2VjQxLjMzMDhDMjguMzAzMyAzOC4zOTAyIDM1LjA4MiAzNy4zODU3IDQxLjQwODQgMzcuMzczM0g0MS41NDYzQzU5LjQ4NTUgMzcuNDE1MiA4MC45Mjk4IDQ1LjMzNzkgODEuNjE5OCA4Mi43MDIxQzgxLjg4MiA5Ny4wMzg2IDc4LjMzNTQgMTA4LjM3MSA3MS4xMDQ1IDExNi4zOTFDNjQuMDUzIDEyNC4xODggNTQuMTAzOCAxMjguMTcxIDQxLjU0NjMgMTI4LjE5OUg0MS40MDg0QzM0LjAyNzggMTI4LjE4NiAyNy41NTI2IDEyNi43OTcgMjIuMDI5IDEyNC4wOEMyMS41NjUgMTI2LjI1MyAxOS44ODg5IDEyNy44ODEgMTcuODU1MyAxMjcuOTk0QzE3LjUyMzUgMTI4LjA3MyAxNy4xNzU5IDEyOC4xMTUgMTYuODE3OCAxMjguMTE1SDQuNTA4ODFDMi4yMDMzMyAxMjguMTE1IDAuMzM0NTA5IDEyNi4zNiAwLjMxMzkyNiAxMjQuMjFDMC4yMTE0MyAxMjMuNzggMC4xNTY3NjEgMTIzLjMyNyAwLjE1Njc2MSAxMjIuODU5Vjc3LjgwMzRMMCAzMS41QzAuMDAyMzA5MiAzMS4xMzUyIDAuMDU2NzgyOCAzMC43ODIyIDAuMTU2NzYxIDMwLjQ0NzJWNS4xNDA1NkMwLjE1Njc2MSAyLjI5NjEyIDIuMTc4NzEgMCA0LjY4MzUxIDBaTTQxLjQ5MTEgMTA2LjY4QzM0LjUwODYgMTA2LjY2NiAyOS4zMDYzIDEwNC44MDggMjYuMDIyIDEwMS4xNzVDMjIuNTcyMiA5Ny4zNDYgMjAuODg4NyA5MS4yNjc3IDIxLjA0MDUgODMuMDY1NEMyMS40MjY4IDYyLjk1OCAyOS4xNTQ0IDU4LjkwNiA0MS40OTExIDU4Ljg3ODFDNTMuODQxNSA1OC44OTIgNjEuNTY5MyA2Mi45NDQxIDYxLjk1NTcgODMuMDY1NEM2Mi4xMjEzIDkxLjI2NzcgNjAuNDM3NiA5Ny4zNDYgNTYuOTczOSAxMDEuMTc1QzUzLjY3NTkgMTA0LjgwOCA0OC40NzM1IDEwNi42NjYgNDEuNDkxMSAxMDYuNjhaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNjAyLjM0MyA0MS4xNzkxVjQ1LjIwMTdDNjAyLjM0MyA0NS4yMDE3IDYwNi45OTkgMzcuMzU3MyA2MTkgMzYuMTg0MUM2MzEuMDAxIDM1LjAxMDggNjM4LjI5MSAzOS41MDMgNjQ1LjE3MSA0OC4wNTFDNjU4LjA0NCAzMi4zNjc2IDY3OS41IDM1LjE4NjIgNjkxIDQyLjE3MjJDNzAyLjUgNDkuMTU4MiA3MDYgNjAuNjUyNiA3MDYgNzUuODczOVYxMjRDNzA2IDEyNi4yMDkgNzA0LjIwOSAxMjggNzAyIDEyOEg2ODkuNjU3QzY4Ny40NDggMTI4IDY4NS42NTcgMTI2LjIwOSA2ODUuNjU3IDEyNFY3NS44NzM5QzY4NS42NTcgNTIuNTc2NCA2NTUuNDkyIDUyLjU3NjQgNjU1LjQ5MiA3NS44NzM5VjEyNEM2NTUuNDkyIDEyNi4yMDkgNjUzLjcwMSAxMjggNjUxLjQ5MiAxMjhINjM5QzYzNi43OTEgMTI4IDYzNSAxMjYuMjA5IDYzNSAxMjRWNzUuODczOUM2MzUgNjYuODIzMSA2MjcuNjIxIDU5LjI4MDcgNjE5LjY5NCA1OC40NDI3QzYxOS4wOTUgNTguMjc1MSA2MTguNjQ3IDU4LjI3NTEgNjE4LjA0OCA1OC4yNzUxQzYwOS4zNzMgNTguMjc1MSA2MDIuMzQzIDY2LjE1MjcgNjAyLjM0MyA3NS44NzM5VjEyNEM2MDIuMzQzIDEyNi4yMDkgNjAwLjU1MiAxMjggNTk4LjM0MyAxMjhINTg2QzU4My43OTEgMTI4IDU4MiAxMjYuMjA5IDU4MiAxMjRWNDAuODIxM0M1ODIgMzguNjEyMSA1ODMuNzkxIDM2LjgyMTMgNTg2IDM2LjgyMTNINTk4LjM0M0M2MDAuNTUyIDM2LjgyMTMgNjAyLjM0MyAzOC42MTIxIDYwMi4zNDMgNDAuODIxM1Y0MS4xNzkxWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="></img>
                </span>

            </div>
        </div>
    );
}

export default Sidebar;