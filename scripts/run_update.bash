#!/bin/bash
 
# get the absolute path of the executing script
SCRIPT="$(readlink -f "$0")"
# get the name of the file
SCRIPTFILE="$(basename "$SCRIPT")" 
# assign the directory where the script is located
SCRIPTPATH="$(dirname "$SCRIPT")"
# assign the name of the script 
SCRIPTNAME="$0"
# array command-line arguments provided to the script
ARGS=( "$@" )
# update from master branch
BRANCH="master"

auto_update() {
    # change working directory to SCRIPTPATH
    cd "$SCRIPTPATH"
    # fetch the latest changes from the project repo.
    echo "fetching..." 
    git fetch
    # check if there are differences between the remote and local repo, if so update
    [ -n "$(git diff --name-only "origin/$BRANCH" "$SCRIPTFILE")" ] && {
        echo "updating..."
        git pull --force
        git checkout "$BRANCH"
        git pull --force
        echo "Running the new version..."
        cd -
        exec "$SCRIPTNAME" "${ARGS[@]}"

        exit 1
    }
    echo "Already up to date!"
}

self_update