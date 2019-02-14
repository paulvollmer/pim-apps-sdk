workflow "CI Workflow" {
  on = "push"
  resolves = ["Test"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Lint" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "run-script lint"
}

action "Test" {
  needs = "Lint"
  uses = "actions/npm@master"
  args = "run-script test"
}
