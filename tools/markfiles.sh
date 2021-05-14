#!/bin/bash

apply_markings () {
  for f in $(find src/app/* -type f -name "*.$1"); do

    done=$(head -n1 "$f" | grep Copyright)
    if [ -n "$done" ]; then
        continue
    fi

cat<<EOF > $f.lic
$2 Copyright 2021 Carnegie Mellon University.$3
$2 Released under a 3 Clause BSD-style license. See LICENSE.md in the project root.$3

EOF

    cat $f >> $f.lic
    mv $f.lic $f
    echo applied marking to $f

  done

}

apply_markings cs "//"
apply_markings ts "//"
apply_markings js "//"
apply_markings html "<!--" " -->"
apply_markings cshtml "@*" " *@"
apply_markings ps1 "<#" " #>"
